const navLinks = document.querySelectorAll('.ul-list li a');
const sections = document.querySelectorAll('section');

function removeActive() {
  navLinks.forEach(link => link.parentElement.classList.remove('active'));
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 80, 
      behavior: 'smooth'
    });

    removeActive();
    link.parentElement.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      removeActive();
      const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
      if (activeLink) activeLink.parentElement.classList.add('active');
    }
  });

  if(window.scrollY > 500){
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }

  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if(elementTop < windowHeight - revealPoint){
      el.classList.add('active-reveal');
    }
  });
});

const revealElements = document.querySelectorAll('.home-container, .about-container, .projects-container, .services-container, .contact-content');
revealElements.forEach(el => el.classList.add('reveal'));

const backToTop = document.createElement('div');
backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
backToTop.id = "back-to-top";
document.body.appendChild(backToTop);

backToTop.style.cssText = `
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #474af0;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease;
`;

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

backToTop.addEventListener('mouseover', () => backToTop.style.transform = 'scale(1.2)');
backToTop.addEventListener('mouseout', () => backToTop.style.transform = 'scale(1)');

const cards = document.querySelectorAll('.project-card, .c1, .service-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-8px) scale(1.05)');
  card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
});

const typingElement = document.querySelector('.info-home h3'); 
let currentLang = localStorage.getItem('lang') || 'en';
const wordsMap = {
  fr: ["Dev Full Stack Junior", "Frontend", "Backend", "UI/UX"],
  en: ["Junior Full‑Stack Dev", "Frontend", "Backend", "UI/UX"]
};
let words = wordsMap[currentLang];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentWord = words[wordIndex];
    let displayedText = currentWord.substring(0, charIndex);
    
    typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, typingSpeed / 2);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', type);

document.addEventListener("DOMContentLoaded", () => {
  const loadingText = document.getElementById("loading-text");
  const mainIcon = document.querySelector(".main-icon");
  const subIcons = document.querySelectorAll(".sub-icons i");
  const designerText = document.getElementById("designer-text");
  const mainPage = document.getElementById("main-page");
  const loadingScreen = document.getElementById("loading-screen");

  function showElement(element, delay=0){
    setTimeout(() => {
      element.classList.remove("hidden");
      element.classList.add("fall");
    }, delay);
  }

  showElement(loadingText, 0);          
  showElement(mainIcon, 800);         
  subIcons.forEach((icon, idx) => {
    showElement(icon, 1600 + idx*400);  
  });
  showElement(designerText, 2800);    

  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => loadingScreen.style.display='none', 500);
    mainPage.classList.add("visible");
  }, 4000);
});

// Formspree submission (AJAX)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Envoi en cours...';
    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        status.textContent = 'Merci! Votre message a été envoyé.';
        form.reset();
      } else {
        status.textContent = "Une erreur s'est produite. Réessayez.";
      }
    } catch (err) {
      status.textContent = "Impossible d'envoyer pour le moment.";
    }
    setTimeout(() => { status.textContent = ''; }, 4000);
  });
});

// Modals (Langages, Formation, Projets)
document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.c1[data-target]');
  const modals = document.querySelectorAll('.modal');

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  triggers.forEach(t => {
    t.addEventListener('click', () => {
      const target = t.getAttribute('data-target');
      openModal(target);
    });
  });

  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn && closeBtn.addEventListener('click', () => closeModal(modal));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(m => {
        if (m.getAttribute('aria-hidden') === 'false') closeModal(m);
      });
    }
  });
});

// Services interactive: tilt + toggle active
document.addEventListener('DOMContentLoaded', () => {
  const services = document.querySelectorAll('.service-card');
  const serviceModal = document.getElementById('modal-service');
  const serviceTitle = document.getElementById('modal-service-title');
  const serviceDesc = document.getElementById('modal-service-desc');
  const serviceI18nMap = {
    fullstack: { titleKey: 'services.card1.title', descKey: 'services.card1.desc' },
    design: { titleKey: 'services.card2.title', descKey: 'services.card2.desc' },
    uiux: { titleKey: 'services.card3.title', descKey: 'services.card3.desc' },
    backend: { titleKey: 'services.card4.title', descKey: 'services.card4.desc' },
  };

  services.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotY = ((x / rect.width) - 0.5) * 8;
      const rotX = -((y / rect.height) - 0.5) * 8;
      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
    card.addEventListener('click', () => {
      card.classList.toggle('active');
      if (serviceModal) {
        const key = card.getAttribute('data-service');
        const map = serviceI18nMap[key];
        if (map) {
          const lang = localStorage.getItem('lang') || 'en';
          const dict = window.__i18nDict || {};
          const t = (k) => (dict[lang] && dict[lang][k]) ? dict[lang][k] : '';
          serviceTitle.textContent = t(map.titleKey) || card.querySelector('h3')?.textContent || 'Service';
          serviceDesc.textContent = t(map.descKey) || '';
        }
        serviceModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });
});

// Theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark');
  updateThemeIcon();

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
  });

  function updateThemeIcon(){
    const icon = themeBtn.querySelector('i');
    if (!icon) return;
    if (document.body.classList.contains('dark')) {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  }
});

// i18n simple
document.addEventListener('DOMContentLoaded', () => {
  const dict = {
    fr: {
      'hero.location': 'Basé à Rufisque, Sénégal',
      'hero.availability': 'Disponible maintenant',
      'chips.gl': 'Génie Logiciel',
      'chips.webmobile': 'Web & Mobile',
      'chips.uiux': 'UI/UX',
      'chips.hackathons': 'Hackathons',
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
      'nav.projects': 'Projets',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'hero.title': "Salut, je suis Dionecena",
      'hero.role': 'Dev Full Stack Junior',
      'hero.tagline': "Bonjour ! Moi c’est Moussa Dione, étudiant en 3ᵉ année de Génie Logiciel.  Je suis passionné par le développement Full Stack et la création d’interfaces modernes et utiles.  En parallèle, je conçois aussi des logos, affiches et maquettes graphiques pour donner vie aux idées avec style et impact. Curieux et rigoureux, je suis constamment à l’affût des meilleures pratiques pour perfectionner mes compétences. Mon objectif : collaborer avec des équipes dynamiques sur des projets à fort impact.",
      'cta.contact': 'Me contacter',
      'cta.cv': 'Télécharger le CV',
      'follow': 'Suivez-moi :',
      'about.section': 'À PROPOS',
      'about.title1': 'Construire des expériences',
      'about.title2': 'numériques utiles',
      'about.motivation': 'Ce qui me motive',
      'projects.section': 'PROJETS',
      'projects.title': 'Travaux mis en avant',
      'projects.desc1': 'Projets récents: full‑stack, interfaces modernes, solutions concrètes.',
      'projects.card1.title': 'Musée des Civilisations Noires',
      'projects.card1.desc': 'Expérience immersive 3D avec interface moderne et navigation multilingue.',
      'projects.card2.title': 'EduConnect',
      'projects.card2.desc': 'Plateforme moderne Laravel pour les candidatures étudiantes et écoles au Sénégal. Tableaux de bord, filtres, export PDF.',
      'projects.card3.title': 'Gestion de déchets',
      'projects.card3.desc': 'App de gestion de collecte de déchets : organisation des tournées, utilisateurs, récompenses ; fluidifie le suivi du service.',
      'projects.card4.title': 'Site de garderie',
      'projects.card4.desc': 'Web app pour plannings, gestion d’enfants, parents, comptes utilisateurs. Sécurité et planification dynamique.',
      'projects.card5.title': 'Gestion academie de foot',
      'projects.card5.desc': 'Plateforme club de foot : joueurs, matchs, news, stats. Dashboard admin, UI responsive, architecture modulaire.',
      'projects.card6.title': 'Portfolio',
      'projects.card6.desc': 'Portfolio personnel pour présenter mes projets design et code.',
      'projects.card7.title': 'Site WordPress',
      'projects.card7.desc': 'Boutique e‑commerce estivale : vêtements, accessoires, paiements et livraison rapide au Sénégal.',
      'common.code': 'Code',
      'common.live': 'Live',
      'services.section': 'SERVICES',
      'services.title': 'Mes Services',
      'services.card1.title': 'Développement Web Full Stack',
      'services.card1.desc': 'Applications modernes du front au back avec performances et bonnes pratiques.',
      'services.card2.title': 'Création de Logos & Maquettes',
      'services.card2.desc': 'Identité visuelle et maquettes soignées pour mettre en valeur vos idées.',
      'services.card3.title': "Conception d'Interfaces UI/UX",
      'services.card3.desc': 'Interfaces intuitives, modernes et accessibles orientées expérience utilisateur.',
      'services.card4.title': 'Développement Backend & API',
      'services.card4.desc': 'APIs robustes et sécurisées, intégrations et architectures maintenables.',
      'contact.section': 'CONTACT',
      'contact.title': 'Contact',
      'contact.desc': 'Ouvert aux projets. Parlons de votre idée.',
      'contact.fill': 'Veuillez remplir le formulaire, nous reviendrons vers vous très vite !',
      'common.live_demo': 'Live Demo',
      'form.name': 'Votre nom',
      'form.email': 'Votre email',
      'form.message': 'Votre message',
      'form.send': 'Envoyer',
      'modal.tech.title': 'Langages & Technologies',
      'modal.education.title': 'Formation',
      'modal.education.item1': '2023–2026 — ISI, Licence en Génie Logiciel',
      'modal.education.item2': '2023–2024 — Cabis School, Baccalauréat Scientifique',
      'modal.education.item3': 'Certifications en cours — OpenClassrooms, Udemy, Coursera',
      'modal.projects.title': 'Projets — Tech utilisées',
      'modal.projects.cta': 'Voir les projets'
    },
    en: {
      'hero.location': 'Based in Rufisque, Senegal',
      'hero.availability': 'Available now',
      'chips.gl': 'Software Engineering',
      'chips.webmobile': 'Web & Mobile',
      'chips.uiux': 'UI/UX',
      'chips.hackathons': 'Hackathons',
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'hero.title': "Hi, I'm Dionecena",
      'hero.role': 'Junior Full‑Stack Developer',
      'hero.tagline': "Hi! I'm Moussa Dione, a third-year Software Engineering student. I'm passionate about Full Stack development and creating modern, useful interfaces. I also design logos, posters, and UI mockups to bring ideas to life with style and impact. Curious and rigorous, I’m always striving to learn best practices and improve my skills. My goal is to work with dynamic teams on high-impact projects.",
      'cta.contact': 'Contact me',
      'cta.cv': 'Download CV',
      'follow': 'Follow me:',
      'about.section': 'ABOUT',
      'about.title1': 'Building meaningful',
      'about.title2': 'digital experiences',
      'about.motivation': 'What drives me',
      'projects.section': 'PROJECTS',
      'projects.title': 'Featured work',
      'projects.desc1': 'Recent projects: full‑stack, modern UIs, real impact.',
      'projects.card1.title': 'Museum of Black Civilizations',
      'projects.card1.desc': 'Immersive 3D experience with modern UI and multilingual browsing.',
      'projects.card2.title': 'EduConnect',
      'projects.card2.desc': 'Modern Laravel platform for student applications and schools in Senegal. Dashboards, filters, PDF exports.',
      'projects.card3.title': 'Waste Management',
      'projects.card3.desc': 'Waste collection management app for organizing routes, users, and rewards – streamlines service tracking.',
      'projects.card4.title': 'Childcare Website',
      'projects.card4.desc': 'Web app for planning, managing children, parents, and user accounts. Secure login and dynamic planning.',
      'projects.card5.title': 'Football Academy Management',
      'projects.card5.desc': 'Football club management platform: players, matches, news, stats. Admin dashboard, responsive UI, modular design.',
      'projects.card6.title': 'Portfolio Website',
      'projects.card6.desc': 'Personal portfolio to showcase my design and coding projects.',
      'projects.card7.title': 'WordPress Website',
      'projects.card7.desc': 'Summer e‑commerce store: clothing, accessories, secure payments, fast delivery in Senegal.',
      'common.code': 'Code',
      'common.live': 'Live',
      'services.section': 'SERVICES',
      'services.title': 'My Services',
      'services.card1.title': 'Full‑Stack Web Development',
      'services.card1.desc': 'Modern apps from front to back with performance and best practices.',
      'services.card2.title': 'Logos & Wireframes',
      'services.card2.desc': 'Clean visual identity and mockups to showcase your ideas.',
      'services.card3.title': 'UI/UX Design',
      'services.card3.desc': 'Intuitive, modern and accessible interfaces focused on UX.',
      'services.card4.title': 'Backend & APIs',
      'services.card4.desc': 'Robust, secure APIs with maintainable architectures.',
      'contact.section': 'CONTACT',
      'contact.title': 'Get in touch',
      'contact.desc': 'Open to projects. Let’s build your idea.',
      'contact.fill': 'Please fill out the form, we will get back to you very soon!',
      'common.live_demo': 'Live Demo',
      'form.name': 'Your Name',
      'form.email': 'Your Email',
      'form.message': 'Your Message',
      'form.send': 'Send Message',
      'modal.tech.title': 'Languages & Technologies',
      'modal.education.title': 'Education',
      'modal.education.item1': '2023–2026 — ISI, B.Sc. in Software Engineering',
      'modal.education.item2': '2023–2024 — Cabis School, Scientific Baccalaureate',
      'modal.education.item3': 'Ongoing Certifications — OpenClassrooms, Udemy, Coursera',
      'modal.projects.title': 'Projects — Used Tech',
      'modal.projects.cta': 'See projects'
    }
  };
  window.__i18nDict = dict;

  function applyLang(lang){
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[lang][key]) el.textContent = dict[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[lang][key]) el.setAttribute('placeholder', dict[lang][key]);
    });
    // update typing words
    currentLang = lang;
    words = wordsMap[lang];
  }

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn){
    const saved = localStorage.getItem('lang') || 'fr';
    applyLang(saved);
    langBtn.textContent = saved.toUpperCase();
    langBtn.addEventListener('click', () => {
      const next = (localStorage.getItem('lang') || 'fr') === 'fr' ? 'en' : 'fr';
      localStorage.setItem('lang', next);
      langBtn.textContent = next.toUpperCase();
      applyLang(next);
    });
  }
});

