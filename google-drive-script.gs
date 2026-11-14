/**
 * ============================================================================
 * AGRO-LAB GENÇLİK İNİSİYATİFİ — GOOGLE DRIVE OTOMATİK ETKİNLİK & HİKAYE KÖPRÜSÜ
 * (Yöntem A: Google Apps Script Web App)
 * ============================================================================
 *
 * KURULUM ADIMLARI (Sadece 1 Dakika Sürer):
 * 1. https://script.google.com adresine gidin ve "Yeni Proje" (New Project) butonuna tıklayın.
 * 2. Açılan editördeki mevcut kodları silip bu dosyanın tamamını yapıştırın ve kaydedin (Ctrl+S).
 * 3. Sağ üstteki "Dağıt" (Deploy) -> "Yeni dağıtım" (New deployment) seçeneğine tıklayın.
 * 4. Tür (Select type) olarak "Web uygulaması" (Web app) seçin:
 *    - Şunun olarak çalıştır (Execute as): "Ben" (Me)
 *    - Erişimi olanlar (Who has access): "Herkes" (Anyone)  <-- ÇOK ÖNEMLİ!
 * 5. "Dağıt" (Deploy) butonuna basın, izinleri onaylayın ve size verilen "Web uygulaması URL'sini"
 *    kopyalayıp script.js dosyasındaki DRIVE_SCRIPT_URL değişkenine yapıştırın.
 *
 * NASIL ÇALIŞIR?
 * - Ana Drive klasörünüzün (1CyZTMs4nbbypNXl5YrnjsvtNZNe-_1UU) içindeki her alt klasörü bir "Etkinlik / Hikaye" olarak algılar.
 * - Klasör içindeki fotoğraflardan adı "web" ile başlayanları (web.jpg, web 1.jpg, web 2.jpg, web (1).jpeg vb.)
 *   otomatik olarak ana sayfadaki dönen sunum vitrinine (showcase) yerleştirir; tüm fotoğrafları ise albüm galerisinde gösterir.
 * - Klasörün içi BOŞ ise (Örn: Awesome Founders veya yeni açtığınız bir etkinlik klasörü),
 *   otomatik olarak isEmpty: true işaretler ve sitede "✨ YAKINDA / ÇOK YAKINDA" olarak gösterir!
 */

const ROOT_FOLDER_ID = '1CyZTMs4nbbypNXl5YrnjsvtNZNe-_1UU';
const CACHE_TTL_SECONDS = 90; // 90 saniyelik hızlı önbellek

function isWebFileName(name) {
  const clean = (name || '').trim();
  return /^web(\b|[\s_\-\d(.]|$)/i.test(clean);
}

function doGet(e) {
  try {
    const forceRefresh = e && e.parameter && e.parameter.refresh === '1';
    const cache = CacheService.getScriptCache();
    const cacheKey = 'agrolab_drive_v2_' + ROOT_FOLDER_ID;

    if (!forceRefresh) {
      const cached = cache.get(cacheKey);
      if (cached) {
        return ContentService.createTextOutput(cached)
          .setMimeType(ContentService.MimeType.JSON);
      }
    }

    const rootFolder = DriveApp.getFolderById(ROOT_FOLDER_ID);
    const subFolders = rootFolder.getFolders();
    const foldersData = [];

    while (subFolders.hasNext()) {
      const folder = subFolders.next();
      if (folder.isTrashed()) continue;

      const media = collectFolderMedia(folder);
      const totalCount = media.images.length + media.videos.length;

      foldersData.push({
        id: folder.getId(),
        name: folder.getName(),
        updatedAt: folder.getLastUpdated().toISOString(),
        isEmpty: totalCount === 0,
        status: totalCount === 0 ? 'coming_soon' : 'active',
        imageCount: media.images.length,
        videoCount: media.videos.length,
        webImages: media.webImages,
        images: media.images,
        videos: media.videos
      });
    }

    // Klasörleri sırala: Önce dolu klasörler (ErasmusDays öne gelecek şekilde), sonra boş ("Yakında") klasörler
    foldersData.sort(function(a, b) {
      const aIsErasmus = a.name.toLowerCase().indexOf('erasmus') !== -1;
      const bIsErasmus = b.name.toLowerCase().indexOf('erasmus') !== -1;
      if (aIsErasmus && !bIsErasmus) return -1;
      if (!aIsErasmus && bIsErasmus) return 1;
      if (a.isEmpty !== b.isEmpty) return a.isEmpty ? 1 : -1;
      return a.name.localeCompare(b.name, 'tr');
    });

    const payload = JSON.stringify({
      ok: true,
      rootFolderId: ROOT_FOLDER_ID,
      syncedAt: new Date().toISOString(),
      folders: foldersData
    });

    try {
      cache.put(cacheKey, payload, CACHE_TTL_SECONDS);
    } catch (cacheErr) {
      // Payload 100KB üstündeyse cache atlanır, doğrudan yanıt döner
    }

    return ContentService.createTextOutput(payload)
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      ok: false,
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Klasör ve varsa alt klasörlerindeki görsel/video dosyalarını toplar
 */
function collectFolderMedia(folder) {
  const webImages = [];
  const regularImages = [];
  const videos = [];

  function scan(currentFolder) {
    const files = currentFolder.getFiles();
    while (files.hasNext()) {
      const file = files.next();
      if (file.isTrashed()) continue;

      const mime = file.getMimeType() || '';
      const id = file.getId();
      const name = file.getName();

      if (mime.indexOf('image/') === 0) {
        const isWeb = isWebFileName(name);
        const item = {
          id: id,
          title: name,
          isWeb: isWeb,
          thumbUrl: 'https://drive.google.com/thumbnail?id=' + id + '&sz=w800',
          fullUrl: 'https://drive.google.com/thumbnail?id=' + id + '&sz=w1600'
        };
        if (isWeb) {
          webImages.push(item);
        } else {
          regularImages.push(item);
        }
      } else if (mime.indexOf('video/') === 0) {
        videos.push({
          id: id,
          title: name,
          thumbUrl: 'https://drive.google.com/thumbnail?id=' + id + '&sz=w800',
          previewUrl: 'https://drive.google.com/file/d/' + id + '/preview',
          viewUrl: 'https://drive.google.com/file/d/' + id + '/view'
        });
      }
    }

    // Alt klasör varsa onları da tara
    const nested = currentFolder.getFolders();
    while (nested.hasNext()) {
      const child = nested.next();
      if (!child.isTrashed()) {
        scan(child);
      }
    }
  }

  scan(folder);

  // "web", "web 1", "web 2", "web (1)" isimli fotoğrafları doğal sırasıyla diz
  webImages.sort(function(a, b) {
    return a.title.localeCompare(b.title, 'tr', { numeric: true, sensitivity: 'base' });
  });

  return {
    webImages: webImages,
    images: webImages.concat(regularImages),
    videos: videos
  };
}
