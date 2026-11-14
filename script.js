/**
 * Agro-Lab Gençlik İnisiyatifi - Core Interactive Logic & Particle Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initTheme();
  initLanguage();
  initModals();
  initAccordion();
  initCopyAndShare();
  initVolunteerForm();
  initQRCode();
  initDriveStoriesEngine();
});

/* ==========================================================================
   1. TRANSLATION / LOCALIZATION DICTIONARY (TR & EN)
   ========================================================================== */
const translations = {
  tr: {
    nav_badge: "AGRO-LAB • HİKAYELER & ETKİNLİKLER",
    verified: "Doğrulanmış İnisiyatif",
    tagline: "Topraktan Dijitale, Genç Çiftçiden Agro-Girişimciye 🌱⚡",
    banner_sub: "HİKAYELERİMİZ & ETKİNLİKLERİMİZ",
    banner_heading: "ErasmusDays",
    learn_more_btn: "Albümü Aç →",
    coming_soon_badge: "✨ ÇOK YAKINDA",
    gallery_modal_title: "Hikayelerimiz & Etkinliklerimiz",
    gallery_modal_sub: "Google Drive klasörümüzden otomatik çekilen etkinlik albümlerimiz ve yakında gelecek hikayelerimiz",
    story_haberler: "Haberler",
    story_faaliyetler: "Faaliyetler",
    story_basarilar: "Başarılar",
    story_team: "Core Team",
    wa_title: "WhatsApp Gençlik Topluluğumuz",
    wa_tag: "Katılıma Açık",
    wa_desc: "Resmi duyurular, saha atölyeleri, eğitimler ve gençlik buluşmalarımıza anında katılın.",
    ig_title: "@agro_labgenclik Instagram",
    ig_desc: "Saha anları, atölyelerimiz, hikayelerimiz ve proje güncellemelerimizi Instagram'dan keşfedin.",
    join_title: "Aramıza Katıl & Gönüllü Ol",
    join_badge: "Başvur",
    join_desc: "Ziraat, yazılım, tasarım veya kırsal kalkınmaya ilgi duyan gençlerle ekibimizi büyütüyoruz!",
    projects_title: "Akıllı Tarım & IoT İnovasyonları",
    projects_desc: "Otonom sulama sistemleri, sensör düğümleri ve saha Living Lab projelerimizi inceleyin.",
    email_title: "Kurumsal İletişim & Ortaklık",
    email_desc: "Erasmus+, kamu kurumları ve sivil toplum ortaklıkları için bize e-posta ile ulaşın.",
    about_heading: "Agro-Lab Gençlik İnisiyatifi Hakkında",
    about_p1: "Agro-Lab Gençlik İnisiyatifi, Muş merkezli kurulan ve Doğu Anadolu'nun zengin tarımsal potansiyelini 21. yüzyılın dijital yetkinlikleriyle sentezlemeyi hedefleyen dinamik ve bağımsız bir gençlik topluluğudur.",
    quote_text: "Amacımız; geleneksel ‘Genç Çiftçi’ algısını, teknolojiyle donatılmış ve değer üreten ‘Agro-Girişimci’ kimliğine dönüştürmektir.",
    objectives_title: "Temel Hedeflerimiz",
    obj1_title: "Kırsalda Dijital Okuryazarlık: ",
    obj1_desc: "Kırsal bölgedeki gençlerin dijital araçlar, IoT ve veri odaklı yetkinliklerini artırmak.",
    obj2_title: "Akıllı Tarım Uygulamaları: ",
    obj2_desc: "Sürdürülebilir kırsal kalkınma için sensörlü, su tasarruflu modern tarım yöntemlerini sahaya taşımak.",
    obj3_title: "Yaşayan Laboratuvar (Living Lab): ",
    obj3_desc: "Ziraat ve yazılım mühendisliği öğrencileri ile kırsaldaki gençleri ortak sorunlara yenilikçi çözümler üretmek için bir araya getirmek.",
    obj4_title: "Tersine Beyin Göçü & Fırsatlar: ",
    obj4_desc: "Kırsaldan kente genç göçünü azaltacak yerel tarım-teknoloji girişimciliği ekosistemi oluşturmak.",
    footer_sub: "Topraktan güç alan, teknolojiyle yeşeren gelecek.",
    qr_title: "Agro-Lab Bağlantı QR Kodu",
    qr_sub: "Etkinliklerde, sahada veya afişlerde kolayca taratıp açın.",
    copy_link_btn: "🔗 Bağlantıyı Kopyala",
    download_qr_btn: "📥 QR Kodu İndir",
    haberler_title: "Haberler & Duyurular",
    haberler_sub: "Agro-Lab ekosisteminden son gelişmeler",
    news1_title: "🌾 Akıllı Tarım & IoT Prototipi Saha Testlerinde",
    news1_text: "Üniversite ve kırsal gençlik ortaklığıyla geliştirilen sensör tabanlı otonom nem ölçüm ve damla sulama istasyonumuz sahada başarıyla test edilmeye başlandı.",
    news2_title: "🇪🇺 Erasmus+ Gençlik Değişimleri Ortaklık Çağrısı",
    news2_text: "Avrupa Birliği 'Twin Transition' (Yeşil ve Dijital Dönüşüm) öncelikleri kapsamında partner kuruluşlarımızla yeni gençlik projeleri hazırlığındayız.",
    faaliyet_title: "Faaliyetlerimiz & Living Lab",
    faaliyet_sub: "Sahada teori ile pratiğin buluştuğu noktalar",
    act1_title: "Otonom Sulama & Sensörler",
    act1_desc: "Toprak nemi ve hava sıcaklığına göre otomatik su yönetimi sağlayan düşük maliyetli IoT düğümleri.",
    act2_title: "Akran Öğrenmesi Atölyeleri",
    act2_desc: "Ziraat fakültesi öğrencileri ve genç çiftçilerin birbirine pratik ve dijital deneyim aktardığı interaktif kamplar.",
    act3_title: "Veri Tabanlı Çiftçilik",
    act3_desc: "Uydu görüntüleri, açık kaynak sensör verileri ve yerel iklim projeksiyonlarıyla verim optimizasyonu.",
    act4_title: "Karar Alıcılarla Diyalog",
    act4_desc: "Genç çiftçilerin taleplerini yerel tarım müdürlükleri ve politika yapıcılarla buluşturan yuvarlak masa toplantıları.",
    basari_title: "Başarılarımız & Etkimiz",
    basari_sub: "Büyüyen gençlik inisiyatifimizin iz bırakan adımları",
    stat1: "Ulaşılan Kırsal Genç",
    stat2: "Hedef Su Tasarrufu",
    stat3: "Üniversite Kulüp İş Birliği",
    basari_desc: "Agro-Lab, bölgedeki gençleri sadece teknoloji tüketicisi değil; yerel sorunları çözen prototip üreticileri ve eko-girişimciler haline getirme yolunda güçlü bir ivme yakalamıştır.",
    team_title: "Çekirdek Ekip (Core Team)",
    team_sub: "Agro-Lab vizyonunu hayata geçiren genç liderler",
    member1_desc: "Dijital yetkinlikler, IoT sistem mimarisi, proje koordinasyonu ve gençlik çalışmaları yürütücüsü.",
    member2_desc: "Saha deneyleri, çiftçi diyaloğu, prototip kurulumları ve kırsal lojistik yönetimi.",
    member3_desc: "Muş Alparslan Üniversitesi ve bölge üniversitelerinden ziraat, mühendislik ve sosyal bilimler öğrencileri.",
    join_modal_title: "Agro-Lab Ailesine Katıl",
    join_modal_sub: "Birlikte üretelim, öğrenelim ve kırsalı dönüştürelim!",
    form_name_lbl: "Adınız Soyadınız *",
    form_contact_lbl: "Telefon / WhatsApp veya E-Posta *",
    form_field_lbl: "İlgi Alanınız / Bölümünüz",
    form_msg_lbl: "Bize Kısaca Kendinden Bahset",
    form_submit_btn: "🚀 Başvurumu WhatsApp İle Gönder"
  },
  en: {
    nav_badge: "AGRO-LAB • STORIES & EVENTS",
    verified: "Verified Initiative",
    tagline: "From Soil to Digital, from Young Farmer to Agro-Entrepreneur 🌱⚡",
    banner_sub: "OUR STORIES & EVENTS",
    banner_heading: "ErasmusDays",
    learn_more_btn: "Open Album →",
    coming_soon_badge: "✨ COMING SOON",
    gallery_modal_title: "Our Stories & Events",
    gallery_modal_sub: "Event albums and upcoming stories automatically synced from our Google Drive",
    story_haberler: "News",
    story_faaliyetler: "Activities",
    story_basarilar: "Milestones",
    story_team: "Core Team",
    wa_title: "WhatsApp Youth Community",
    wa_tag: "Open for Join",
    wa_desc: "Join our official community for events, field workshops, training and youth meetups.",
    ig_title: "@agro_labgenclik Instagram",
    ig_desc: "Explore our field moments, hands-on workshops, stories and updates on Instagram.",
    join_title: "Join Us & Become a Volunteer",
    join_badge: "Apply",
    join_desc: "Calling all students and youth passionate about agriculture, IoT, software and rural development!",
    projects_title: "Smart Agriculture & IoT Innovations",
    projects_desc: "Discover our autonomous irrigation, sensor network prototypes and Living Lab field trials.",
    email_title: "Official Contact & Partnerships",
    email_desc: "Reach out via email for Erasmus+, institutional partnerships, and NGO collaborations.",
    about_heading: "About Agro-Lab Youth Initiative",
    about_p1: "Agro-Lab Youth Initiative is an informal youth group founded in Muş, Eastern Turkey, dedicated to synthesizing regional agricultural potential with 21st-century digital competencies.",
    quote_text: "Our core mission is to transform the traditional 'Young Farmer' concept into a digitally empowered, value-creating 'Agro-Entrepreneur'.",
    objectives_title: "Our Key Objectives",
    obj1_title: "Digital Literacy in Rural Areas: ",
    obj1_desc: "Enhance digital tool proficiencies, IoT understanding, and data literacy among rural youth.",
    obj2_title: "Smart Agriculture Applications: ",
    obj2_desc: "Deploy low-cost, sensor-based water-saving agricultural technology directly into the field.",
    obj3_title: "Living Lab Co-Creation: ",
    obj3_desc: "Bring university students (agriculture & tech) together with rural youth to co-design local solutions.",
    obj4_title: "Reducing Brain Drain: ",
    obj4_desc: "Create local agro-tech entrepreneurial opportunities to curb rural-to-urban youth migration.",
    footer_sub: "Rooted in the soil, thriving with technology.",
    qr_title: "Agro-Lab Link QR Code",
    qr_sub: "Scan quickly during field events, workshops or on flyers.",
    copy_link_btn: "🔗 Copy Link",
    download_qr_btn: "📥 Download QR Code",
    haberler_title: "News & Announcements",
    haberler_sub: "Latest milestones and calls from Agro-Lab",
    news1_title: "🌾 Smart Agri & IoT Prototype Under Field Testing",
    news1_text: "Our autonomous moisture-sensing and precision drip irrigation station is undergoing live field tests with youth and farmers.",
    news2_title: "🇪🇺 Erasmus+ Youth Exchanges Call for Partners",
    news2_text: "Preparing new youth exchange projects focusing on the EU Twin Transition (Green & Digital).",
    faaliyet_title: "Our Activities & Living Lab",
    faaliyet_sub: "Where theoretical science meets real-world soil",
    act1_title: "Autonomous Irrigation & IoT",
    act1_desc: "Cost-effective sensor nodes adjusting water flow automatically based on soil humidity and temperature.",
    act2_title: "Peer-to-Peer Learning Camps",
    act2_desc: "Interactive workshops where engineering students and young farmers exchange tech and agrarian expertise.",
    act3_title: "Data-Driven Farming",
    act3_desc: "Yield optimization leveraging open-source telemetry, weather forecasts, and satellite data.",
    act4_title: "Dialogue with Policymakers",
    act4_desc: "Roundtables bridging youth farmers directly with regional agricultural directorates.",
    basari_title: "Our Milestones & Impact",
    basari_sub: "Step-by-step progress towards sustainable rural empowerment",
    stat1: "Rural Youth Reached",
    stat2: "Target Water Savings",
    stat3: "University Club Partners",
    basari_desc: "Agro-Lab transforms youth from passive technology consumers into proactive eco-innovators solving local challenges.",
    team_title: "Core Team",
    team_sub: "The passionate leaders driving the Agro-Lab vision",
    member1_desc: "Lead coordinator, digital competencies, IoT architecture, and Erasmus+ youth work manager.",
    member2_desc: "Field operations, farmer relations, prototype hardware installations, and rural logistics.",
    member3_desc: "Agri-science and engineering student researchers across Muş Alparslan University and regional hubs.",
    join_modal_title: "Join the Agro-Lab Family",
    join_modal_sub: "Let's innovate, build, and transform rural agriculture together!",
    form_name_lbl: "Full Name *",
    form_contact_lbl: "Phone / WhatsApp or Email *",
    form_field_lbl: "Area of Interest / Major",
    form_msg_lbl: "Tell us a bit about yourself",
    form_submit_btn: "🚀 Send Application via WhatsApp"
  }
};

let currentLang = 'tr';

/* ==========================================================================
   2. AMBIENT PARTICLES CANVAS ENGINE
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 35), 35);

  class AgroParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2.2 + 0.8;
      this.baseAlpha = Math.random() * 0.45 + 0.15;
      this.alpha = this.baseAlpha;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = -Math.random() * 0.5 - 0.15; // Slow upward float like spores/sprouts
      this.pulse = Math.random() * Math.PI;
      // Green and gold ecological tones
      const colors = ['#10b981', '#34d399', '#84cc16', '#10b981', '#f59e0b'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.pulse += 0.025;
      this.alpha = this.baseAlpha + Math.sin(this.pulse) * 0.12;

      // Wrap around edges
      if (this.y < -10) this.y = height + 10;
      if (this.x < -10) this.x = width + 10;
      if (this.x > width + 10) this.x = -10;
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new AgroParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw subtle connection lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#10b981';
          ctx.globalAlpha = (1 - dist / 110) * 0.12;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   3. THEME TOGGLE (DARK / LIGHT)
   ========================================================================== */
function initTheme() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('agrolab_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('agrolab_theme', nextTheme);
      showToast(nextTheme === 'dark' ? '🌙 Karanlık Tema' : '☀️ Aydınlık Tema');
    });
  }
}

/* ==========================================================================
   4. LANGUAGE TOGGLE (TR / EN)
   ========================================================================== */
function initLanguage() {
  const langBtn = document.getElementById('lang-toggle-btn');
  const langText = langBtn ? langBtn.querySelector('.lang-text') : null;
  const savedLang = localStorage.getItem('agrolab_lang') || 'tr';

  setLanguage(savedLang);

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'tr' ? 'en' : 'tr';
      setLanguage(nextLang);
      localStorage.setItem('agrolab_lang', nextLang);
      showToast(nextLang === 'tr' ? '🇹🇷 Türkçe seçildi' : '🇬🇧 English selected');
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  const langBtn = document.getElementById('lang-toggle-btn');
  const langText = langBtn ? langBtn.querySelector('.lang-text') : null;
  if (langText) {
    langText.textContent = lang === 'tr' ? 'EN' : 'TR';
  }

  const dict = translations[lang] || translations.tr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  if (typeof window.refreshDriveShowcaseLang === 'function') {
    window.refreshDriveShowcaseLang();
  }
}

/* ==========================================================================
   5. MODAL SYSTEM
   ========================================================================== */
function initModals() {
  // Highlight items click
  document.querySelectorAll('.highlight-item[data-modal]').forEach(item => {
    item.addEventListener('click', () => {
      const modalId = item.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  // Action buttons opening modals
  const qrBtn = document.getElementById('qr-modal-btn');
  if (qrBtn) qrBtn.addEventListener('click', () => openModal('modal-qr'));

  const volunteerBtn = document.getElementById('volunteer-modal-btn');
  if (volunteerBtn) volunteerBtn.addEventListener('click', () => openModal('modal-volunteer'));

  const projectsBtn = document.getElementById('projects-modal-btn');
  if (projectsBtn) projectsBtn.addEventListener('click', () => openModal('modal-faaliyetler'));

  // Close triggers
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal));
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) closeModal(activeModal);
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ==========================================================================
   6. ACCORDION / ABOUT DRAWER
   ========================================================================== */
function initAccordion() {
  const toggleBtn = document.getElementById('about-toggle-btn');
  const drawer = document.getElementById('about-drawer');
  const openTrigger = document.getElementById('open-about-trigger');

  function toggle() {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      drawer.style.maxHeight = '0px';
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.style.maxHeight = drawer.scrollHeight + 'px';
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', toggle);
  }

  if (openTrigger && drawer && toggleBtn) {
    openTrigger.addEventListener('click', () => {
      drawer.style.maxHeight = drawer.scrollHeight + 'px';
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
}

/* ==========================================================================
   7. QR CODE DISPLAY
   ========================================================================== */
function initQRCode() {
  const qrContainer = document.getElementById('qr-container');
  const downloadBtn = document.getElementById('download-qr-btn');
  const copyPageBtn = document.getElementById('copy-page-url-btn');

  if (qrContainer) {
    // Branded QR image
    const qrImg = document.createElement('img');
    qrImg.src = 'assets/qr-agrolab.png';
    qrImg.alt = 'Agro-Lab QR Code';
    qrImg.style.width = '210px';
    qrImg.style.height = '210px';
    qrImg.style.display = 'block';
    qrImg.style.borderRadius = '8px';
    qrContainer.innerHTML = '';
    qrContainer.appendChild(qrImg);

    if (downloadBtn) {
      downloadBtn.href = 'assets/qr-agrolab.png';
    }
  }

  if (copyPageBtn) {
    copyPageBtn.addEventListener('click', () => {
      const url = window.location.href;
      copyToClipboard(url, 'Bağlantı panoya kopyalandı! 📋');
    });
  }
}

/* ==========================================================================
   8. COPY TO CLIPBOARD & SHARE LINK
   ========================================================================== */
function initCopyAndShare() {
  // Copy Email button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'elkatmisfurkan65@gmail.com';
      copyToClipboard(email, 'E-posta panoya kopyalandı: ' + email);
    });
  }

  // Top nav share button
  const shareBtn = document.getElementById('share-link-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: 'Agro-Lab Gençlik İnisiyatifi',
        text: 'Agro-Lab Gençlik İnisiyatifi resmi bağlantıları ve Living Lab platformu.',
        url: window.location.href
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          // If user cancels share, ignore
        }
      } else {
        copyToClipboard(window.location.href, 'Sayfa bağlantısı kopyalandı! 🔗');
      }
    });
  }
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast(successMsg);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   9. VOLUNTEER / JOIN APPLICATION FORM
   ========================================================================== */
function initVolunteerForm() {
  const form = document.getElementById('volunteer-form');
  const mailBtn = document.getElementById('submit-mail-btn');
  if (!form) return;

  function getFormData() {
    const name = document.getElementById('form-name').value.trim();
    const contact = document.getElementById('form-contact').value.trim();
    const field = document.getElementById('form-field').value;
    const msg = document.getElementById('form-msg').value.trim();
    return { name, contact, field, msg };
  }

  // Submit via WhatsApp
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { name, contact, field, msg } = getFormData();
    if (!name || !contact) {
      showToast('Lütfen ad ve iletişim bilgilerinizi giriniz.');
      return;
    }

    const waText = encodeURIComponent(
      `Merhaba Agro-Lab Ekibi! 🌱\n\n` +
      `Ben Agro-Lab Gençlik İnisiyatifine katılmak ve gönüllü olmak istiyorum.\n\n` +
      `👤 *Ad Soyad:* ${name}\n` +
      `📞 *İletişim:* ${contact}\n` +
      `🎯 *İlgi Alanı:* ${field}\n` +
      (msg ? `📝 *Not:* ${msg}\n\n` : `\n`) +
      `Topluluk çalışmalarınızda yer almaktan mutluluk duyarım!`
    );

    const waUrl = `https://wa.me/905398283413?text=${waText}`;
    showToast('WhatsApp açılıyor... 🚀');
    window.open(waUrl, '_blank');

    closeModal(document.getElementById('modal-volunteer'));
    form.reset();
  });

  // Submit via Email
  if (mailBtn) {
    mailBtn.addEventListener('click', () => {
      const { name, contact, field, msg } = getFormData();
      if (!name || !contact) {
        showToast('Lütfen ad ve iletişim bilgilerinizi giriniz.');
        return;
      }

      const subject = encodeURIComponent(`Agro-Lab Gönüllü & Katılım Başvurusu - ${name}`);
      const body = encodeURIComponent(
        `Merhaba Agro-Lab Ekibi,\n\n` +
        `Agro-Lab Gençlik İnisiyatifi çalışmalarına katılmak ve gönüllü olmak istiyorum.\n\n` +
        `Ad Soyad: ${name}\n` +
        `İletişim: ${contact}\n` +
        `İlgi Alanı: ${field}\n` +
        (msg ? `Not: ${msg}\n\n` : `\n`) +
        `İyi çalışmalar dilerim.`
      );

      const mailtoUrl = `mailto:elkatmisfurkan65@gmail.com?subject=${subject}&body=${body}`;
      showToast('E-posta açılıyor... ✉️');
      window.location.href = mailtoUrl;

      closeModal(document.getElementById('modal-volunteer'));
      form.reset();
    });
  }
}

/* ==========================================================================
   10. GOOGLE DRIVE POWERED "HİKAYELERİMİZ & ETKİNLİKLERİMİZ" ENGINE
       (3-Layer Architecture: Apps Script Web App + Live Drive Scanner + Snapshot)
   ========================================================================== */

/**
 * YÖNTEM A (Google Apps Script) Bağlantı Noktası:
 * google-drive-script.gs dosyasını Google Apps Script'e yapıştırıp "Web Uygulaması" olarak
 * dağıttığınızda aldığınız URL'yi aşağıdaki DRIVE_SCRIPT_URL içine yapıştırabilirsiniz.
 * (Boş bıraksanız bile 2. ve 3. katman sayesinde Drive klasörünüz otomatik taranır!)
 */
const DRIVE_ROOT_FOLDER_ID = '1CyZTMs4nbbypNXl5YrnjsvtNZNe-_1UU';
let DRIVE_SCRIPT_URL = localStorage.getItem('agrolab_drive_script_url') || 'https://script.google.com/macros/s/AKfycbyISvQg2DFgIkmbVoL3FeSq91JTBmhSDYMkeUQ2r8VQcmUkqNk3biNAMc_AhrICg9aMxA/exec';

// URL parametresi ile kolay tanımlama desteği (?drive_api=https://script.google.com/...)
try {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('drive_api')) {
    DRIVE_SCRIPT_URL = urlParams.get('drive_api').trim();
    localStorage.setItem('agrolab_drive_script_url', DRIVE_SCRIPT_URL);
  }
} catch (_) {}

// Drive'daki gerçek görsel ve video ID'leri (0ms anında açılış önbelleği)
const DRIVE_SNAPSHOT_IMAGES = ["1-bj2lgNLDTDVgy6GWLrkV1FRHkjD2mY5","1JG4oGz9QJs44Ht-Cyec94CseoL44oc-u","1dzQvVIBn_x0BqWQNQQ9Xho49GuUhADgx","1XfydbiUCLnrYDSWgKnK4z7DELENGSZyc","1nTRI9E_yhdbseJ4rdo_i0Zs2i7R-H0in","1by4BIaQQP5MiEB5Vu3AgFexl4tBp095z","1j9WwrJaGJQeUXbFjOquLVgL_SV9UqBDA","1DxYX3MZ1rm3Gt2yu2of-iP9AdVUXueHr","1jL1DCEWzLrRiq7hOUULe8qeJPUeQ396z","1V9Fw_nT1Eg_lj1mq5sLyROzgrXqNH8QE","1cLd7bKfu_8izKtMlm12ptNVk9A0Auxoz","1GJT2ZbV2IM2AxeJweUzb9PBpDCjBRHc6","14wZCBYDGXBfzdS0r-F60prl8uqy6R_MW","1FokimatxQNLVu6zx_E6kwTTb-DJDWIR_","1dbW-F7FY3ACL6UTd4bgc2uL98c6MbgrX","1SesDl70oQ95NRTnrx8NeRSVK5dykQqdI","1BQyLeAxnsOGJBaVtndNpDi5WoLQ53cBZ","191bNlF6_l2Xw9am12wf8zlvEXF0GBr_Y","1loq8PwxL-xkoGA0pp5nfXaNe88CFWCmZ","19HA4bw_mhcJ5Qb-Kaeg9LHCptbVq_gVC","1LuPu18d0Qf3fNA8G2RM0dWIGhWSHpg10","1b5GQU_5J9tKU49UVvFkX4f7bPNTNg9KD","1Ewd7VOOdVCdACRmNFVOiTaIV324MRWcj","1cc0-p4OXySf1Ep-NVhdrX7PfnzHf8Ksa","1S5hvJoMaczm7Mt4ZMhMU7v92bYnbajnE","1Mv7uMMN2neQ70NGc2tjGsKhDrcBd5tR5","1DjeDbYts_q93cx9IAMXyAOVDJpkVVr3l","1bSDLpj7_Pju2GMQXD2WAtvV2gFgEJAT-","1FAAhbFKYDXkkme00pIyKiq93IW11evSg","1Sl_qO59F8UWVhDpbgBmKjjuGWaEaMbH0","10IHl2M-sPMuJQ9Tv9ZJjVLV_3lHHqSHK","10WhP3MfDFAq-5WxzVvch_wH03z6EnPaJ","1vsEkPiTXqsJienJsR-ogJG1jGVo0LgeD","1VTpuLHkdSXHnTnQ9PNAEndmyxX2O6f6M","1yPG_TzgXFCr8gnv44Y9NE3515w7Aj8dJ","1FlcHGqZsN8twHGyRg3UEvrEOW2S6sihV","1MWu4au1a_1-HvAvy9A7Sd1ZvhKmjX4hQ","1ramFuHbqOiAqUwY6x1esW_IY0vKVR2v6","1uoLpv7ud_IrHqW14_Di_thuHofXkm-sg","1LWtup7twdSLwg5BvnfO79dN9DufXqZkv","1d-HHLDvuWNrrhIgVgL_VbFfX0Z2pd9zT","1dVrEIKexcX8W5NGXmqVWzFyhfECEqpbV","12nR0_0wL9uEY6_PmqRDGJUbpAbpTrXkm","1wl2x_x7HN-0HbXZDAWqgsnj5E9EpKTVD","104_LXa_tjIbaS6jumrpUaxadcSaiWiu5","1DIQux98L7e5TrM1v-uurcnk8xgb5L_PC","1pJ4jCe0wMlTEpj18Z5HPTh7r5ilXQT4s","1XAlMlIJsJn6gX1_rxOcsp8L7v5IwAj2j","1L-Lm_s4kLrHeQH6tZ1v5VesgrVYtAHON","1k4Hl8RWLrqXQMY_BAWMYb-FRaAivajkQ","1wfkvfIIvsBDJ3pdLZdTdS_XSpku-6rG7","1DgqwOwWFhNQLhWLUyDmQDHNzIeTR9Ark","1spScRKt9LNsaWnPDa-jt-ogMzciHjqv-","1iXlAx9lyzUQQF7Y-cRYt4hwbSJ3-PPct","1SrWU8MyL4gP5A1bpxBhM_BYeq24Brix7","1qDOWDSQNi9RUGPzYt2M-w95gD_FPkxp-","1_qcQj-Q4Vewt3WHmO53jzHNrNJXEMdwG","1loIda5_zBgxmwD0Qe7cDaJIwBFPF4iJe","1q24UMB1TqFMVu2Cky4g2q3sUk0lkZp0c","1ITpP3RRl52H9puqWoiDggYF0brxY7MjU","1cV1_MWvgRspioJrJXd07Mlxq9-KClgIO","1UL3S4SG9foxhWdbrmkPWj6JV1YAvmai2","1RzotIsSRitsynmyBwRijq-SMZpGNBXEX","1nzRCChCH_9AajXWzZehkyvdJW1OREjFQ","1SQzvkGP_1k2z7C-7aihVyQu8tJCLlgo-","1x9J6wvNjwWpSRgqTYA1LnR7vjIF83KWh","10LXhjATDKbRbLkcIkv728KrVtXDWjdk8","1eYA8kNyZp0A0ZElCKtpZDD-Lc0gpWEe8","1VAvfgedqyoQvVdB4UZamXhrrB4MS-eTc","1BhthhOZ5AUck-VBvxDBh8u9_KifUX8St","1N_lpnPPvfgnAyV7ZLGumDAKcquppRMGg","1Uk-WsZ7-y4HsnvipVl_ixxFWsqlBJhOa","1D1QJpVKLRIELVr3C5_YfUUJJVwJDL0_3","1pqKpe12VpDBLL7Uizj0-bVODRXZuEdZW","1YqdARL6SO_tU0ylTCFx_8LCvptj8ENp4","1AQyKhvmRHLI1hn01LJZSK8qR9Eise3kG","1_IbvlIbu6kuaJT2kMgAbT6V5N1Qbj3N5","17NuCO21lU4HwpX_fIH_6VRxfabJFQYhx","1bFAA17XMgVwkfaMhTjlOzyxQ94Sw1_Yx","1SRtmwF3rEuWZIyNWQOfNh9LfrQrHgHM_","1fF8Z0D5bB1BEAuDBwSDOfDZwiHG1PT_c","15lvcLtc9U_ZiGH9i6iVQPnFe2119Caud","1QqOCMGEV4Irpr41aUi_kzgqXNC6H-voT","1JhHVFZhIjrAYhT1iWzFYna4uC5pQaIRO","1gVzaDIGilY_ZM4QAFplAPlw0M5N0Clex","1dYYHWh_swaCcfPbgVBAdthxfcgYnrQWm","1t6srHiO4xBEZnbvI1-aUUONX3DNvt9y9","1M5H0aQCXMredlYFmwgXG4lsJtpCgY72D","1Va_wBbWFXpWZWYtYwX8UL88ZdP3sD3lL","1skYB1S-rIlhtPSnkFSgSkcaoM5Ad9Zoi","1acztLROuomUI8Y44d_mMIn11xES6Zqza","1N4vNRZV9F07sPQDGcA2-KOV55UvjNzUw","1gvVu5Y9NeHx_J1-KpKxfvfBvBsWafy5y","1rR92Ir7oQ65vXQHzI9Di1l6lu5Hmotbt","1CmrynL6n_r87cdc6rMED6lW2QKRMF0py","1lF6WCPr1IuWa5vbisIKEHErkpxr0_tvW","1Yus2KdcNqkyNYeLep6tinvy7PptgrhhW","1IOjKOaaVEiMm5IUf7rbR_hBIH8FSuOPl","1CKg_NedX5DjDC87OdV2B0Lko2chB8EBV","1RRmcSeSsFr8a-zrrLPXnv1nn9rhfydLk","1BCyiy09dwRE-KZ4eX82HtYsm8GWlwSNK","1AICDpWiWkoN4oSwHE6SGD7uyd4qUJh6_","1kzDwuGRR1AB5cA-LowQMviZw4nhyvcjf","13BCJ4ayfc3d6IyH8XF83xizMEK2BV94f","1YJOe_pDXLV6P2hib7beyZQkG_pp1BMAC","1uQhW7Rhi4fKiYVAR2s6501s9ASxbNryI","1R186m64ZMnHvFIPFgiRRWJpKWbH6Piwm","1NcsWtBP2mKFTBOl4f-jJxeMIPvZQMh0D","1vNw41velanm7j-p5jBYdRgjpDCJuzZBO","11NA74jYNmVA20uIc_VzQClBSfr7lhLyd","1INQcbihE4Q1qAvEtBqJRkjvwzUxRSXRG","1tNpgUBHAmqpYGPo90q4A6RPHSM8qTfhF","1kBXVKyiTj_5w3rrC9-et3sMwToSgnau8","1XJPf2LcqaqvN8poQtFvxCoBWl_rEmy8L","1qROVuyNnfOn1Qh94HprInyQKJeBP7DLH","1fwifY-kR1ByLNBykZk9gE2v0RV1AKP2J","15cGrs_q7plWzZkoEsU6xTtXpAfCKvZmo","1Xv9d5LqaPhY-ZUGnysfMIxpVHzZe2zHU","1IIW4Uo9UL-JtLDe1WhWZxf4hUuPtDBuK","1JZ77nhLAHAgifMgQvBpT8T2A9JqnDoE2","1vHxYpnoGkb9f1PjCeyHTJQKdD_qIVPzj"];
const DRIVE_SNAPSHOT_VIDEOS = ["1PQgoTZzXrMsCubGymA7rRc72YjLE-yBe","1xZwoDv9v7T-nMEdhnAXATJq2FiSwfiNU","1sduAyu8FAJF6PZMqlFtlOo6oHrvbq0j7","1UD8WKhYVtRgf4wg6MNYdl-y6JkiXh7Oo","1bfMTcC0HTE15K1QXAWn5lpUF7fe-SABW","1JLmuYcyYvoHlDBvoULdJkSePQUSLuF0z","1WHtpvIg-13DBuxAeZ_389pv3Ggx3J8jt","1snLmf-9-Edj8FAiE4hW5odxoyyQ-5ycu","1ZA35gLCYeehIu0nxDvPZ3HimINGHEoW9","1PLcd0iNYuAqkofMKgVR4AquoyxvJR4iY","1JIYg6h9qBrBm7gD1Flxu4y7rPNaZTG7d","1Kgr34zJ9PsrgixoY05TFJtorgRAdwxt4","1j3qUnmcsndf8YWqIyUifIU1t9PSVzDLv","1Edgj7VfIABRCki0pDOPSJaMKFoM6c8Jo","1Y-Fhy4_ysxg2c3oALBCOnCUgZk7xRWLO","10Yje28bYrBdTorbx8mt3R0CLJzz7oXaO","1xI52hKKu2CE9JMYhlBIcOwhWOpRJi4ni","1cvUncnZc3xTzqLpuRIt40oRWgDYTqyMN","133xV_QIsCIWBAVZ2E_-wP17owmW6Nw2X","1Z8vbs2yk50gXRdS37AclUD8zYD6Zvvq4","1Hk0TFAL5N-Zd5iR1uCTBkbVIppNWoF4z","1kJh_faYz3jHRoI288QLtbf9lrkXoJFWX","1OjciKQnvURFo1a9o5R793bGP2MQrI36g","1mENWDDd2G3BM5JgjT7SdHjNsFwPSMS34","1LdoOyaOnW7qgLdD4hKEvmLkW3TN6Rtm-","1b2TveULYiL85pi8i_OF-4EycmEHcr_xr","10MoixeiaZCrYta03ZBwWvnhcdVG7pmEM","17Ssgkmet7WNwPOF000W1yGIqa8WMeKdo","1abuW5pQVF64nJHTZo_E91G6sc-Ziz06R","1mWoIiU5AaXVlL_wogJpXENJ5LgsFe9OO","1bDUNmBxUHENlRW9AH_lbEagCxtjgHYpo","188AXo3UnCOq67owTnfWo3360TkrVGyGD","1OuxkDhnVrudcHuZlNy939x5njmMH4GiS","1C6TFc7rcgndq_yy0D61cEaGxJ2bPLzAI","17ASjiWnLmF0RH5Trwy9wC_inSE6bC_gi","18pyTJvL048pHEyIiYbu0r9kQJMo5VcYD","1Bj-_0xCtgBQcCCQypsJ1-no7jkbARvAW","1tw4aAKu3sf1wE0Gpd0BXJ6S7wTqCh-99","1-FxIhL6ErTmhByQaQ1zQm_jeicjSJ6rk","1NgdSKSxXYZZ3UkGvbwl9H0GwgeAHig3Q","1mLx6eOU4a5nGpeYU38tK8DFq47KdC0v4","1Qf__5XVUbaTHo16jFtzNjUejmnUxc3P7","1UcL3j5YKN2-F2SEdA4gMSJYxSeSiUUZl","1Ib0j9s_UMbojebW5Jthn3rVdwKWvjkGM"];

function buildMediaObject(id, type, index) {
  if (type === 'video') {
    return {
      id,
      type: 'video',
      title: `Etkinlik Videosu #${index + 1}`,
      thumbUrl: `https://drive.google.com/thumbnail?id=${id}&sz=w800`,
      previewUrl: `https://drive.google.com/file/d/${id}/preview`,
      viewUrl: `https://drive.google.com/file/d/${id}/view`
    };
  }
  return {
    id,
    type: 'image',
    title: `Etkinlik Kare #${index + 1}`,
    thumbUrl: `https://drive.google.com/thumbnail?id=${id}&sz=w800`,
    fullUrl: `https://drive.google.com/thumbnail?id=${id}&sz=w1600`,
    viewUrl: `https://drive.google.com/file/d/${id}/view`
  };
}

// Özel Seçilmiş En Güzel 4 Ekip Fotoğrafı (Vitrin ve Ekip Seçkisi için)
const CURATED_TEAM_PHOTO_IDS = [
  "1jL1DCEWzLrRiq7hOUULe8qeJPUeQ396z", // 1. ErasmusDays Tam Kadro Ekip & Paydaşlar (Yatay)
  "1loq8PwxL-xkoGA0pp5nfXaNe88CFWCmZ", // 2. Akıllı Tarım & IoT Proje Stand Sunumu (Yatay)
  "1lF6WCPr1IuWa5vbisIKEHErkpxr0_tvW", // 3. Agro-Lab Gençlik Ekibi Saha Özçekimi (Yatay)
  "1q24UMB1TqFMVu2Cky4g2q3sUk0lkZp0c"  // 4. Standımız, Bayraklar & Tam Kadro Ekip
];

function prioritizeCuratedPhotos(imagesArray) {
  if (!Array.isArray(imagesArray) || imagesArray.length === 0) return imagesArray;
  const curated = [];
  const rest = [];
  const idMap = new Map(imagesArray.map(img => [img.id, img]));

  CURATED_TEAM_PHOTO_IDS.forEach(cid => {
    if (idMap.has(cid)) {
      curated.push(idMap.get(cid));
      idMap.delete(cid);
    }
  });

  idMap.forEach(img => rest.push(img));
  return curated.concat(rest);
}

function getFolderIcon(name, isEmpty) {
  const lower = (name || '').toLowerCase();
  if (lower.includes('erasmus')) return '🇪🇺';
  if (lower.includes('ekip') || lower.includes('team')) return '👥';
  if (lower.includes('founder') || lower.includes('girişim')) return '🚀';
  if (lower.includes('stand')) return '📸';
  if (lower.includes('atölye') || lower.includes('workshop')) return '🌱';
  return isEmpty ? '⏳' : '📂';
}

function getEmptyFolderDescription(name) {
  const lower = (name || '').toLowerCase();
  if (lower.includes('founder')) {
    return currentLang === 'en'
      ? 'Inspiring stories and venture showcases of next-generation rural & agri-tech founders will be live here very soon!'
      : 'Kırsaldan doğan yeni nesil tarım ve teknoloji girişimcilerinin ilham veren hikayeleri ve girişim vitrini çok yakında burada!';
  }
  return currentLang === 'en'
    ? `"${name}" folder is ready in Google Drive! Visuals will automatically appear here as soon as they are uploaded.`
    : `"${name}" klasörü Google Drive'da açıldı! Görseller Drive klasörüne eklendiği anda otomatik olarak burada dönecek.`;
}

function createInitialDriveFolders() {
  const rawImages = DRIVE_SNAPSHOT_IMAGES.map((id, i) => buildMediaObject(id, 'image', i));
  const snapshotImages = prioritizeCuratedPhotos(rawImages);
  const curatedTeamImages = CURATED_TEAM_PHOTO_IDS.map((id, i) => buildMediaObject(id, 'image', i));
  const snapshotVideos = DRIVE_SNAPSHOT_VIDEOS.map((id, i) => buildMediaObject(id, 'video', i));

  return [
    {
      id: '1dFB1cQUgcag_s176DaKaKMwTX5kxbRji',
      name: 'ErasmusDays',
      icon: '🇪🇺',
      isEmpty: false,
      images: snapshotImages,
      videos: snapshotVideos
    },
    {
      id: 'curated-team-photos',
      name: 'Ekip Kareleri',
      icon: '👥',
      isEmpty: false,
      images: curatedTeamImages,
      videos: []
    },
    {
      id: 'awesome-founders-folder',
      name: 'Awesome Founders',
      icon: '🚀',
      isEmpty: true,
      images: [],
      videos: []
    },
    {
      id: '1gS4lK44Y_GphMHq8B-wXP8mA56I0gkdp',
      name: 'Stand Günü',
      icon: '📸',
      isEmpty: false,
      images: snapshotImages,
      videos: snapshotVideos
    }
  ];
}

function initDriveStoriesEngine() {
  let folders = createInitialDriveFolders();
  let activeFolderIndex = 0;
  let activeImageIndex = 0;
  let activeLayer = 'a';
  let isPaused = false;
  let tickTimer = null;
  let elapsedMs = 0;
  const PHOTO_INTERVAL_MS = 3400;
  const PHOTOS_PER_FOLDER_CYCLE = 4; // Her klasörde 4 fotoğraf döndükten sonra sonraki klasöre geçer
  const EMPTY_FOLDER_DURATION_MS = 4500; // Boş ("Yakında") klasörlerin ekranda kalma süresi
  let folderPhotoSteps = 0;

  // Gallery Modal State
  let modalFolderIndex = 0;
  let modalMediaFilter = 'all';
  let modalVisibleCount = 24;
  let currentLightboxList = [];
  let currentLightboxIndex = 0;

  // DOM Elements - Showcase
  const showcaseCard = document.getElementById('banner-preview-card');
  const progressTrack = document.getElementById('showcase-progress-track');
  const imgA = document.getElementById('showcase-img-a');
  const imgB = document.getElementById('showcase-img-b');
  const emptyStage = document.getElementById('showcase-empty-stage');
  const emptyIcon = document.getElementById('coming-soon-icon');
  const emptyTitle = document.getElementById('coming-soon-stage-title');
  const emptyDesc = document.getElementById('coming-soon-stage-desc');
  const statusTag = document.getElementById('showcase-status-tag');
  const photoCounter = document.getElementById('showcase-photo-counter');
  const headingEl = document.getElementById('showcase-heading');
  const openGalleryBtn = document.getElementById('open-gallery-trigger');
  const syncBtn = document.getElementById('showcase-sync-btn');
  const counterText = document.getElementById('showcase-counter-text');
  const prevBtn = document.getElementById('showcase-prev-btn');
  const nextBtn = document.getElementById('showcase-next-btn');
  const foldersBar = document.getElementById('drive-folders-bar');

  // DOM Elements - Gallery Modal
  const galleryTabs = document.getElementById('gallery-folder-tabs');
  const gallerySubbar = document.getElementById('gallery-subbar');
  const galleryFilters = document.getElementById('gallery-media-filters');
  const galleryCountLbl = document.getElementById('gallery-count-label');
  const galleryStage = document.getElementById('gallery-stage-container');
  const loadMoreBtn = document.getElementById('gallery-load-more-btn');
  const refreshDriveBtn = document.getElementById('refresh-drive-btn');
  const faaliyetOpenGalleryBtn = document.getElementById('faaliyet-open-gallery-btn');

  // DOM Elements - Lightbox
  const lightboxModal = document.getElementById('modal-lightbox');
  const lightboxFolderName = document.getElementById('lightbox-folder-name');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxDriveLink = document.getElementById('lightbox-drive-link');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');
  const lightboxMediaBox = document.getElementById('lightbox-media-box');

  if (!showcaseCard) return;

  // Render Progress Bars & Folder Chips
  function renderShowcaseNavigation() {
    if (progressTrack) {
      progressTrack.innerHTML = '';
      folders.forEach((folder, idx) => {
        const seg = document.createElement('div');
        seg.className = 'showcase-progress-seg' + (folder.isEmpty ? ' is-empty-seg' : '');
        seg.title = folder.name;
        const fill = document.createElement('div');
        fill.className = 'showcase-progress-fill';
        fill.style.width = idx < activeFolderIndex ? '100%' : '0%';
        seg.appendChild(fill);
        seg.addEventListener('click', (e) => {
          e.stopPropagation();
          selectShowcaseFolder(idx);
        });
        progressTrack.appendChild(seg);
      });
    }

    if (foldersBar) {
      foldersBar.innerHTML = '';
      folders.forEach((folder, idx) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'drive-folder-chip'
          + (idx === activeFolderIndex ? ' active' : '')
          + (folder.isEmpty ? ' is-empty' : '');

        const iconSpan = document.createElement('span');
        iconSpan.textContent = folder.icon || getFolderIcon(folder.name, folder.isEmpty);

        const nameSpan = document.createElement('span');
        nameSpan.textContent = folder.name;

        const badgeSpan = document.createElement('span');
        if (folder.isEmpty) {
          badgeSpan.className = 'chip-badge soon';
          badgeSpan.textContent = currentLang === 'en' ? '✨ Soon' : '✨ Yakında';
        } else {
          badgeSpan.className = 'chip-badge';
          badgeSpan.textContent = `${folder.images.length + folder.videos.length}`;
        }

        chip.appendChild(iconSpan);
        chip.appendChild(nameSpan);
        chip.appendChild(badgeSpan);

        chip.addEventListener('click', () => {
          if (idx === activeFolderIndex) {
            openEventsGallery(idx);
          } else {
            selectShowcaseFolder(idx);
          }
        });

        foldersBar.appendChild(chip);
      });
    }

    if (counterText) {
      counterText.textContent = `Drive • ${folders.length} Klasör`;
    }
  }

  function updateShowcaseStage(crossfade = true) {
    const folder = folders[activeFolderIndex];
    if (!folder) return;

    // Update active state on chips
    if (foldersBar) {
      Array.from(foldersBar.children).forEach((chip, idx) => {
        chip.classList.toggle('active', idx === activeFolderIndex);
      });
    }

    // Update heading
    if (headingEl) {
      headingEl.textContent = `${folder.icon || getFolderIcon(folder.name, folder.isEmpty)} ${folder.name}`;
    }

    if (folder.isEmpty || folder.images.length === 0) {
      // Show "Yakında" (Coming Soon) stage for empty folders
      if (emptyStage) {
        emptyStage.classList.add('visible');
        emptyStage.setAttribute('aria-hidden', 'false');
      }
      if (emptyIcon) emptyIcon.textContent = folder.icon || '🚀';
      if (emptyTitle) emptyTitle.textContent = folder.name;
      if (emptyDesc) emptyDesc.textContent = getEmptyFolderDescription(folder.name);

      if (statusTag) {
        statusTag.className = 'folder-status-tag tag-soon';
        statusTag.textContent = currentLang === 'en' ? '⏳ Coming Soon' : '⏳ Çok Yakında Sizlerle';
      }
      if (photoCounter) {
        photoCounter.textContent = currentLang === 'en' ? '✨ Preparing Folder' : '✨ Hazırlanıyor';
      }
      if (openGalleryBtn) {
        openGalleryBtn.className = 'banner-info-btn btn-soon';
        openGalleryBtn.textContent = currentLang === 'en' ? '✨ Coming Soon →' : '✨ Yakında →';
      }
    } else {
      // Hide Empty Stage & Crossfade Active Photo
      if (emptyStage) {
        emptyStage.classList.remove('visible');
        emptyStage.setAttribute('aria-hidden', 'true');
      }

      const safeIdx = activeImageIndex % folder.images.length;
      const imgObj = folder.images[safeIdx];
      const nextUrl = imgObj.thumbUrl;

      if (crossfade && imgA && imgB) {
        const targetImg = activeLayer === 'a' ? imgB : imgA;
        const currentImg = activeLayer === 'a' ? imgA : imgB;
        targetImg.src = nextUrl;
        targetImg.onload = () => {
          targetImg.classList.add('active-layer');
          currentImg.classList.remove('active-layer');
          activeLayer = activeLayer === 'a' ? 'b' : 'a';
        };
      } else if (imgA) {
        imgA.src = nextUrl;
        imgA.classList.add('active-layer');
        if (imgB) imgB.classList.remove('active-layer');
        activeLayer = 'a';
      }

      if (statusTag) {
        statusTag.className = 'folder-status-tag';
        statusTag.textContent = currentLang === 'en'
          ? `📸 Event Album`
          : `📸 Etkinlik Albümü`;
      }
      if (photoCounter) {
        const videoNote = folder.videos.length > 0 ? ` • 🎬 ${folder.videos.length}` : '';
        photoCounter.textContent = `🖼️ ${safeIdx + 1} / ${folder.images.length}${videoNote}`;
      }
      if (openGalleryBtn) {
        openGalleryBtn.className = 'banner-info-btn';
        openGalleryBtn.textContent = currentLang === 'en' ? 'Open Album →' : 'Albümü Aç →';
      }
    }
  }

  function updateProgressBars(ratio) {
    if (!progressTrack) return;
    const segs = progressTrack.querySelectorAll('.showcase-progress-fill');
    segs.forEach((fill, idx) => {
      if (idx < activeFolderIndex) {
        fill.style.width = '100%';
      } else if (idx > activeFolderIndex) {
        fill.style.width = '0%';
      } else {
        fill.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
      }
    });
  }

  function selectShowcaseFolder(idx) {
    activeFolderIndex = (idx + folders.length) % folders.length;
    activeImageIndex = 0;
    folderPhotoSteps = 0;
    elapsedMs = 0;
    updateShowcaseStage(true);
    updateProgressBars(0);
  }

  function stepNextSlide() {
    const folder = folders[activeFolderIndex];
    if (!folder) return;

    if (folder.isEmpty || folder.images.length === 0) {
      // Advance directly to next folder
      selectShowcaseFolder(activeFolderIndex + 1);
      return;
    }

    folderPhotoSteps++;
    const maxSteps = Math.min(PHOTOS_PER_FOLDER_CYCLE, folder.images.length);
    if (folderPhotoSteps >= maxSteps) {
      // Move to the next folder so all folders (including Awesome Founders) rotate!
      selectShowcaseFolder(activeFolderIndex + 1);
    } else {
      activeImageIndex = (activeImageIndex + 1) % folder.images.length;
      elapsedMs = 0;
      updateShowcaseStage(true);
    }
  }

  function startAutoRotation() {
    if (tickTimer) clearInterval(tickTimer);
    const TICK_MS = 100;
    tickTimer = setInterval(() => {
      if (isPaused) return;
      const folder = folders[activeFolderIndex];
      if (!folder) return;

      elapsedMs += TICK_MS;
      if (folder.isEmpty || folder.images.length === 0) {
        const ratio = elapsedMs / EMPTY_FOLDER_DURATION_MS;
        updateProgressBars(ratio);
        if (elapsedMs >= EMPTY_FOLDER_DURATION_MS) {
          stepNextSlide();
        }
      } else {
        const maxSteps = Math.min(PHOTOS_PER_FOLDER_CYCLE, folder.images.length);
        const totalFolderDuration = maxSteps * PHOTO_INTERVAL_MS;
        const currentFolderElapsed = folderPhotoSteps * PHOTO_INTERVAL_MS + elapsedMs;
        updateProgressBars(currentFolderElapsed / totalFolderDuration);

        if (elapsedMs >= PHOTO_INTERVAL_MS) {
          stepNextSlide();
        }
      }
    }, TICK_MS);
  }

  // Showcase Interactions
  showcaseCard.addEventListener('mouseenter', () => { isPaused = true; });
  showcaseCard.addEventListener('mouseleave', () => { isPaused = false; });

  showcaseCard.addEventListener('click', (e) => {
    if (e.target.closest('.showcase-nav-btn') || e.target.closest('.showcase-progress-seg')) return;
    openEventsGallery(activeFolderIndex);
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const folder = folders[activeFolderIndex];
      if (!folder.isEmpty && activeImageIndex > 0) {
        activeImageIndex--;
        elapsedMs = 0;
        updateShowcaseStage(true);
      } else {
        selectShowcaseFolder(activeFolderIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      stepNextSlide();
    });
  }

  if (faaliyetOpenGalleryBtn) {
    faaliyetOpenGalleryBtn.addEventListener('click', () => {
      closeModal(document.getElementById('modal-faaliyetler'));
      openEventsGallery(0);
    });
  }

  // Core Team Modal'daki 4 Özel Seçilmiş Ekip Fotoğrafına tıklanınca tam ekran aç
  document.querySelectorAll('#team-curated-grid .team-photo-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-photo-idx') || '0', 10);
      currentLightboxList = CURATED_TEAM_PHOTO_IDS.map((id, i) => buildMediaObject(id, 'image', i));
      openLightbox(idx, 'Ekip Kareleri (Özel Seçki)');
    });
  });

  // =========================================================================
  // GALLERY MODAL & LIGHTBOX LOGIC
  // =========================================================================
  function openEventsGallery(folderIdx) {
    modalFolderIndex = typeof folderIdx === 'number' ? folderIdx : activeFolderIndex;
    modalMediaFilter = 'all';
    modalVisibleCount = 24;
    renderGalleryModal();
    openModal('modal-gallery');
  }

  function renderGalleryModal() {
    const folder = folders[modalFolderIndex] || folders[0];
    if (!folder) return;

    // 1. Render Folder Tabs
    if (galleryTabs) {
      galleryTabs.innerHTML = '';
      folders.forEach((f, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'gallery-tab-btn'
          + (idx === modalFolderIndex ? ' active' : '')
          + (f.isEmpty ? ' is-empty' : '');

        const icon = f.icon || getFolderIcon(f.name, f.isEmpty);
        const badgeText = f.isEmpty
          ? (currentLang === 'en' ? '✨ Soon' : '✨ Yakında')
          : `${f.images.length + f.videos.length}`;

        btn.innerHTML = `<span>${icon}</span><span>${f.name}</span><span class="chip-badge ${f.isEmpty ? 'soon' : ''}">${badgeText}</span>`;
        btn.addEventListener('click', () => {
          modalFolderIndex = idx;
          modalMediaFilter = 'all';
          modalVisibleCount = 24;
          renderGalleryModal();
        });
        galleryTabs.appendChild(btn);
      });
    }

    // 2. Check if Empty Folder ("Yakında")
    if (folder.isEmpty || (folder.images.length === 0 && folder.videos.length === 0)) {
      if (gallerySubbar) gallerySubbar.style.display = 'none';
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      if (galleryStage) {
        galleryStage.innerHTML = `
          <div class="gallery-empty-state">
            <div class="empty-state-icon">${folder.icon || '🚀'}</div>
            <span class="empty-state-badge">${currentLang === 'en' ? '✨ COMING SOON' : '✨ ÇOK YAKINDA SİZLERLE'}</span>
            <h4 class="empty-state-title">${folder.name}</h4>
            <p class="empty-state-desc">${getEmptyFolderDescription(folder.name)}</p>
            <div class="empty-state-actions">
              <a href="https://www.instagram.com/agro_labgenclik" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                📸 Instagram'dan Takip Et
              </a>
              <a href="https://drive.google.com/drive/folders/${DRIVE_ROOT_FOLDER_ID}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                📂 Drive Klasörünü Gör
              </a>
            </div>
          </div>
        `;
      }
      return;
    }

    // 3. Non-empty folder: Show Filter Bar & Grid
    if (gallerySubbar) gallerySubbar.style.display = 'flex';
    if (galleryFilters) {
      galleryFilters.querySelectorAll('.media-filter-pill').forEach(pill => {
        const fType = pill.getAttribute('data-filter');
        pill.classList.toggle('active', fType === modalMediaFilter);
        if (fType === 'all') {
          pill.textContent = `Tümü (${folder.images.length + folder.videos.length})`;
        } else if (fType === 'image') {
          pill.textContent = `📸 Fotoğraflar (${folder.images.length})`;
        } else if (fType === 'video') {
          pill.textContent = `🎬 Videolar (${folder.videos.length})`;
        }
      });
    }

    let combined = [];
    if (modalMediaFilter === 'image') {
      combined = folder.images;
    } else if (modalMediaFilter === 'video') {
      combined = folder.videos;
    } else {
      combined = folder.images.concat(folder.videos);
    }

    currentLightboxList = combined;

    if (galleryCountLbl) {
      galleryCountLbl.textContent = `${combined.length} içerik`;
    }

    const slice = combined.slice(0, modalVisibleCount);
    if (galleryStage) {
      const grid = document.createElement('div');
      grid.className = 'gallery-grid';

      slice.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'gallery-media-card';
        card.innerHTML = `
          <img src="${item.thumbUrl}" alt="${item.title}" loading="lazy" referrerpolicy="no-referrer" />
          ${item.type === 'video' ? `<div class="video-badge-overlay"><div class="video-play-circle">▶</div></div>` : ''}
        `;
        card.addEventListener('click', () => openLightbox(idx, folder.name));
        grid.appendChild(card);
      });

      galleryStage.innerHTML = '';
      galleryStage.appendChild(grid);
    }

    if (loadMoreBtn) {
      if (modalVisibleCount < combined.length) {
        loadMoreBtn.style.display = 'inline-flex';
        loadMoreBtn.textContent = `➕ Daha Fazla Göster (${combined.length - modalVisibleCount} kaldı)`;
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }
  }

  if (galleryFilters) {
    galleryFilters.querySelectorAll('.media-filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        modalMediaFilter = pill.getAttribute('data-filter') || 'all';
        modalVisibleCount = 24;
        renderGalleryModal();
      });
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      modalVisibleCount += 24;
      renderGalleryModal();
    });
  }

  // Lightbox Viewer
  function openLightbox(index, folderTitle) {
    if (!currentLightboxList.length) return;
    currentLightboxIndex = (index + currentLightboxList.length) % currentLightboxList.length;
    if (lightboxFolderName && folderTitle) {
      lightboxFolderName.textContent = folderTitle;
    }
    renderLightboxItem();
    openModal('modal-lightbox');
  }

  function renderLightboxItem() {
    const item = currentLightboxList[currentLightboxIndex];
    if (!item || !lightboxMediaBox) return;

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxList.length}`;
    }
    if (lightboxDriveLink) {
      lightboxDriveLink.href = item.viewUrl || `https://drive.google.com/file/d/${item.id}/view`;
    }

    if (item.type === 'video') {
      lightboxMediaBox.innerHTML = `
        <iframe src="${item.previewUrl}" allow="autoplay; fullscreen" allowfullscreen></iframe>
      `;
    } else {
      lightboxMediaBox.innerHTML = `
        <img src="${item.fullUrl || item.thumbUrl}" alt="${item.title}" referrerpolicy="no-referrer" />
      `;
    }
  }

  function closeLightbox() {
    if (lightboxMediaBox) lightboxMediaBox.innerHTML = '';
    closeModal(lightboxModal);
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
      renderLightboxItem();
    });
  }
  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
      renderLightboxItem();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') {
      currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
      renderLightboxItem();
    } else if (e.key === 'ArrowRight') {
      currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
      renderLightboxItem();
    }
  });

  // =========================================================================
  // LIVE GOOGLE DRIVE SYNC (Katman 1: Apps Script Web App + Katman 2: Public Scanner)
  // =========================================================================
  async function syncFromGoogleDrive(manual = false) {
    if (manual) {
      showToast('☁️ Google Drive klasörleri taranıyor...');
    }

    // 1. Katman: Yöntem A (Google Apps Script URL tanımlıysa)
    if (DRIVE_SCRIPT_URL) {
      try {
        const sep = DRIVE_SCRIPT_URL.includes('?') ? '&' : '?';
        const res = await fetch(`${DRIVE_SCRIPT_URL}${sep}${manual ? 'refresh=1&' : ''}t=${Date.now()}`);
        const data = await res.json();
        if (data && data.ok && Array.isArray(data.folders) && data.folders.length > 0) {
          applyLiveDriveFolders(data.folders);
          if (manual) showToast('✅ Drive klasörleri başarıyla güncellendi!');
          return;
        }
      } catch (err) {
        console.warn('Apps Script fetch fallback:', err);
      }
    }

    // 2. Katman: Sıfır Kurulumlu Public Drive Klasör Tarayıcı
    try {
      const scanned = await scanPublicDriveRoot(DRIVE_ROOT_FOLDER_ID);
      if (scanned && scanned.length > 0) {
        applyLiveDriveFolders(scanned);
        if (manual) showToast('✅ Drive klasörleri senkronize edildi!');
        return;
      }
    } catch (err) {
      // Snapshot katmanı aktif kalmaya devam eder
    }

    if (manual) {
      showToast('✅ Drive arşivi güncel!');
    }
  }

  async function fetchViaCorsProxy(targetUrl) {
    const proxies = [
      `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`,
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`
    ];
    for (const pUrl of proxies) {
      try {
        const res = await fetch(pUrl);
        if (res.ok) {
          const text = await res.text();
          if (text && text.includes('flip-entries')) return text;
        }
      } catch (_) {}
    }
    return null;
  }

  async function scanPublicDriveRoot(rootId) {
    const rootHtml = await fetchViaCorsProxy(`https://drive.google.com/embeddedfolderview?id=${rootId}#list`);
    if (!rootHtml) return null;

    const folderRegex = /id="entry-([^"]+)"[\s\S]*?drive-sprite-folder[\s\S]*?<div class="flip-entry-title">([^<]+)<\/div>/g;
    const foundFolders = [];
    let match;
    while ((match = folderRegex.exec(rootHtml)) !== null) {
      foundFolders.push({ id: match[1], name: match[2].trim() });
    }

    if (!foundFolders.length) return null;

    const results = [];
    for (const f of foundFolders) {
      const subHtml = await fetchViaCorsProxy(`https://drive.google.com/embeddedfolderview?id=${f.id}#list`);
      const images = [];
      const videos = [];

      if (subHtml) {
        const entryRegex = /id="entry-([^"]+)"[\s\S]*?<div class="flip-entry-list-icon"><img src="https:\/\/drive-thirdparty\.googleusercontent\.com\/16\/type\/([^"]+)"[\s\S]*?<div class="flip-entry-title">([^<]+)<\/div>/g;
        let em;
        while ((em = entryRegex.exec(subHtml)) !== null) {
          const fileId = em[1];
          const mime = em[2];
          const title = em[3].trim();
          if (mime.includes('image')) {
            images.push({
              id: fileId,
              type: 'image',
              title,
              thumbUrl: `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
              fullUrl: `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`,
              viewUrl: `https://drive.google.com/file/d/${fileId}/view`
            });
          } else if (mime.includes('video')) {
            videos.push({
              id: fileId,
              type: 'video',
              title,
              thumbUrl: `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
              previewUrl: `https://drive.google.com/file/d/${fileId}/preview`,
              viewUrl: `https://drive.google.com/file/d/${fileId}/view`
            });
          }
        }
      }

      results.push({
        id: f.id,
        name: f.name,
        images,
        videos,
        isEmpty: images.length === 0 && videos.length === 0
      });
    }

    return results;
  }

  function applyLiveDriveFolders(rawFolders) {
    const normalized = rawFolders.map(f => {
      const imgs = (f.images || []).map((img, i) => ({
        id: img.id,
        type: 'image',
        title: img.title || `Görsel #${i + 1}`,
        thumbUrl: img.thumbUrl || `https://drive.google.com/thumbnail?id=${img.id}&sz=w800`,
        fullUrl: img.fullUrl || `https://drive.google.com/thumbnail?id=${img.id}&sz=w1600`,
        viewUrl: img.viewUrl || `https://drive.google.com/file/d/${img.id}/view`
      }));
      const vids = (f.videos || []).map((vid, i) => ({
        id: vid.id,
        type: 'video',
        title: vid.title || `Video #${i + 1}`,
        thumbUrl: vid.thumbUrl || `https://drive.google.com/thumbnail?id=${vid.id}&sz=w800`,
        previewUrl: vid.previewUrl || `https://drive.google.com/file/d/${vid.id}/preview`,
        viewUrl: vid.viewUrl || `https://drive.google.com/file/d/${vid.id}/view`
      }));
      const isEmpty = imgs.length === 0 && vids.length === 0;
      return {
        id: f.id,
        name: f.name,
        icon: getFolderIcon(f.name, isEmpty),
        isEmpty,
        images: prioritizeCuratedPhotos(imgs),
        videos: vids
      };
    });

    // Akıllı Eşleştirme: Eğer ErasmusDays klasörü Drive'da henüz boşsa ve Stand Günü doluysa,
    // ErasmusDays'in ilk sırada 4 özel ekip fotoğrafıyla dolu görünmesini sağla
    const erasmusFolder = normalized.find(f => f.name.toLowerCase().includes('erasmus'));
    const standFolder = normalized.find(f => f.name.toLowerCase().includes('stand'));
    if (erasmusFolder && erasmusFolder.isEmpty && standFolder && !standFolder.isEmpty) {
      erasmusFolder.images = prioritizeCuratedPhotos(standFolder.images);
      erasmusFolder.videos = standFolder.videos;
      erasmusFolder.isEmpty = false;
      erasmusFolder.icon = '🇪🇺';
    }

    // 4 Özel Seçilmiş Ekip Fotoğrafı ("Ekip Kareleri") sekmesini koru
    const hasTeamFolder = normalized.some(f => f.name.toLowerCase().includes('ekip'));
    if (!hasTeamFolder) {
      normalized.push({
        id: 'curated-team-photos',
        name: 'Ekip Kareleri',
        icon: '👥',
        isEmpty: false,
        images: CURATED_TEAM_PHOTO_IDS.map((id, i) => buildMediaObject(id, 'image', i)),
        videos: []
      });
    }

    // Awesome Founders klasörü Drive'da henüz yoksa "Yakında" (boş klasör) olarak ekle
    const hasFounders = normalized.some(f => f.name.toLowerCase().includes('founder'));
    if (!hasFounders) {
      normalized.push({
        id: 'awesome-founders-folder',
        name: 'Awesome Founders',
        icon: '🚀',
        isEmpty: true,
        images: [],
        videos: []
      });
    }

    // Sıralama: 1. ErasmusDays, 2. Ekip Kareleri, 3. Awesome Founders, 4. Diğerleri
    normalized.sort((a, b) => {
      const rank = (name) => {
        const n = name.toLowerCase();
        if (n.includes('erasmus')) return 1;
        if (n.includes('ekip')) return 2;
        if (n.includes('founder')) return 3;
        return 4;
      };
      return rank(a.name) - rank(b.name);
    });

    folders = normalized;
    if (activeFolderIndex >= folders.length) activeFolderIndex = 0;
    renderShowcaseNavigation();
    updateShowcaseStage(false);
    const galleryModal = document.getElementById('modal-gallery');
    if (galleryModal && galleryModal.classList.contains('active')) {
      renderGalleryModal();
    }
  }

  if (refreshDriveBtn) {
    refreshDriveBtn.addEventListener('click', () => syncFromGoogleDrive(true));
  }

  window.refreshDriveShowcaseLang = () => {
    renderShowcaseNavigation();
    updateShowcaseStage(false);
    const galleryModal = document.getElementById('modal-gallery');
    if (galleryModal && galleryModal.classList.contains('active')) {
      renderGalleryModal();
    }
  };

  // Initial Boot
  renderShowcaseNavigation();
  updateShowcaseStage(false);
  startAutoRotation();
  syncFromGoogleDrive(false);
}
