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
});

/* ==========================================================================
   1. TRANSLATION / LOCALIZATION DICTIONARY (TR & EN)
   ========================================================================== */
const translations = {
  tr: {
    nav_badge: "AGRO-LAB LIVING LAB",
    verified: "Doğrulanmış İnisiyatif",
    tagline: "Topraktan Dijitale, Genç Çiftçiden Agro-Girişimciye 🌱⚡",
    banner_sub: "YAŞAYAN LABORATUVAR (LIVING LAB)",
    banner_heading: "Gençlik ve Tarım Teknolojileri Buluşması",
    learn_more_btn: "Tanı & Keşfet →",
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
    nav_badge: "AGRO-LAB LIVING LAB",
    verified: "Verified Initiative",
    tagline: "From Soil to Digital, from Young Farmer to Agro-Entrepreneur 🌱⚡",
    banner_sub: "LIVING LAB ECOSYSTEM",
    banner_heading: "Where Youth Meets Agricultural Technology",
    learn_more_btn: "Discover More →",
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
