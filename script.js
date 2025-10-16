

// Translation system
const translations = {
    fr: {
        // Profile page
        title: "Dev Full Stack Junior",
        description: "Je suis étudiant en 3e année de Génie Logiciel, passionné par le développement logiciel, web et mobile, les interfaces modernes et les solutions numériques utiles à la société. J'aime apprendre, créer, et surtout construire des projets qui ont du sens — que ce soit en solo ou en équipe, dans un hackathon ou à travers une idée personnelle.",
        downloadCV: "Download CV",
        contactMe: "Contact Me!",
        
        // Work Experience
        workExperience: "Expérience Professionnelle",
        backendDev: "Backend Developer - Teranga Code (1er Prix)",
        backendDesc: "Projet réalisé lors du hackathon Teranga Code où mon équipe a remporté le premier prix. Plateforme dédiée à l'orientation et à la gestion des candidatures dans l'enseignement supérieur sénégalais. J'ai assuré le développement du backend et la structuration des fonctionnalités principales.",
        frontendDev: "Frontend Developer - Dakar Slush'D",
        frontendDesc: "Projet réalisé lors du hackathon Dakar Slush'D en équipe. Expérience immersive pour découvrir les œuvres du Musée des Civilisations Noires. J'ai assuré le développement frontend avec une interface moderne, des effets visuels dynamiques et une navigation multilingue.",
        
        // Education
        education: "Formation",
        softwareEng: "Licence en Génie Logiciel - ISI",
        softwareDesc: "Formation axée sur le développement logiciel, l'architecture des systèmes, la sécurité web et les projets collaboratifs.",
        baccalaureat: "Baccalauréat Scientifique - Cabis School",
        baccDesc: "Spécialisation en sciences exactes avec une forte orientation vers la logique, les mathématiques et l'informatique.",
        certifications: "Certifications en ligne",
        certDesc: "Formations complémentaires sur OpenClassrooms, Udemy et Coursera en développement web, Git/GitHub et sécurité des applications.",
        
        // Services
        myServices: "Mes Services",
        fullStackDev: "Développement Web Full Stack",
        fullStackDesc: "Création d'applications web complètes avec technologies modernes, de l'interface utilisateur à la base de données.",
        logoDesign: "Création de Logos & Maquettes",
        logoDesc: "Conception d'identités visuelles uniques et de maquettes professionnelles pour vos projets digitaux.",
        uiuxDesign: "Conception d'Interfaces UI/UX",
        uiuxDesc: "Design d'expériences utilisateur intuitives et d'interfaces modernes pour app web et mobile.",
        backendApi: "Développement Backend & API",
        backendApiDesc: "Création d'architectures serveur robustes et d'APIs sécurisées pour vos applications.",
        readMore: "Lire Plus",
        
        // Skills
        mySkills: "Mes Compétences",
        frontend: "Front-End",
        backendLang: "Back-End & Langages",
        toolsDesign: "Outils & Design",
        
        // Latest Project
        latestProject: "Dernier Projet",
        museumProject: "Musée des Civilisations Noires",
        livePreview: "Aperçu Live",
        techUsed: "Technologies: React, JavaScript, HTML/CSS, Laravel",
        projectDesc: "Expérience immersive 3D pour découvrir les œuvres du Musée des Civilisations Noires. Interface moderne avec effets visuels dynamiques et navigation multilingue développée lors du hackathon Dakar Slush'D.",
        sourceCode: "Code Source",
        moreProjects: "Plus de Projets",
        
        // Contact
        contactTitle: "Contactez-moi !",
        fullName: "Nom Complet",
        emailAddress: "Adresse Email",
        yourMessage: "Votre Message",
        sendMessage: "Envoyer Message",
        profile: "Profil"
    },
    en: {
        // Profile page
        title: "Junior Full Stack Developer",
        description: "I am a 3rd year Software Engineering student, passionate about software, web and mobile development, modern interfaces and digital solutions useful to society. I love learning, creating, and especially building meaningful projects — whether solo or in a team, in a hackathon or through a personal idea.",
        downloadCV: "Download CV",
        contactMe: "Contact Me!",
        
        // Work Experience
        workExperience: "Work Experience",
        backendDev: "Backend Developer - Teranga Code (1st Prize)",
        backendDesc: "Project completed during the Teranga Code hackathon where my team won first prize. Platform dedicated to guidance and application management in Senegalese higher education. I handled backend development and structuring of main functionalities.",
        frontendDev: "Frontend Developer - Dakar Slush'D",
        frontendDesc: "Team project completed during the Dakar Slush'D hackathon. Immersive experience to discover the works of the Museum of Black Civilizations. I handled frontend development with modern interface, dynamic visual effects and multilingual navigation.",
        
        // Education
        education: "Education",
        softwareEng: "Bachelor's in Software Engineering - ISI",
        softwareDesc: "Training focused on software development, system architecture, web security and collaborative projects.",
        baccalaureat: "Scientific Baccalaureate - Cabis School",
        baccDesc: "Specialization in exact sciences with a strong orientation towards logic, mathematics and computer science.",
        certifications: "Online Certifications",
        certDesc: "Additional training on OpenClassrooms, Udemy and Coursera in web development, Git/GitHub and application security.",
        
        // Services
        myServices: "My Services",
        fullStackDev: "Full Stack Web Development",
        fullStackDesc: "Creation of complete web applications with modern technologies, from user interface to database.",
        logoDesign: "Logo & Mockup Creation",
        logoDesc: "Design of unique visual identities and professional mockups for your digital projects.",
        uiuxDesign: "UI/UX Interface Design",
        uiuxDesc: "Design of intuitive user experiences and modern interfaces for web and mobile apps.",
        backendApi: "Backend & API Development",
        backendApiDesc: "Creation of robust server architectures and secure APIs for your applications.",
        readMore: "Read More",
        
        // Skills
        mySkills: "My Skills",
        frontend: "Front-End",
        backendLang: "Back-End & Languages",
        toolsDesign: "Tools & Design",
        
        // Latest Project
        latestProject: "Latest Project",
        museumProject: "Museum of Black Civilizations",
        livePreview: "Live Preview",
        techUsed: "Tech Used: React, JavaScript, HTML/CSS, Laravel",
        projectDesc: "3D immersive experience to discover the works of the Museum of Black Civilizations. Modern interface with dynamic visual effects and multilingual navigation developed during the Dakar Slush'D hackathon.",
        sourceCode: "Source Code",
        moreProjects: "More Projects",
        
        // Contact
        contactTitle: "Contact Me!",
        fullName: "Full Name",
        emailAddress: "Email Address",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        profile: "Profile"
    }
};

// Current language
let currentLang = 'fr';

// Function to translate content
function translateContent(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Profile page
    document.querySelector('.profile-page h3').textContent = t.title;
    document.querySelector('.profile-page p').textContent = t.description;
    document.querySelector('.btn-box .btn:first-child').textContent = t.downloadCV;
    document.querySelector('.btn-box .btn:last-child').textContent = t.contactMe;
    
    // Work Experience page
    document.querySelector('.page-front .title').textContent = t.workExperience;
    const workContents = document.querySelectorAll('.page-front .workeduc-content');
    if (workContents[0]) {
        workContents[0].querySelector('h3').textContent = t.backendDev;
        workContents[0].querySelector('p').textContent = t.backendDesc;
    }
    if (workContents[1]) {
        workContents[1].querySelector('h3').textContent = t.frontendDev;
        workContents[1].querySelector('p').textContent = t.frontendDesc;
    }
    
    // Education page
    document.querySelector('.page-back .title').textContent = t.education;
    const educContents = document.querySelectorAll('.page-back .workeduc-content');
    if (educContents[0]) {
        educContents[0].querySelector('h3').textContent = t.softwareEng;
        educContents[0].querySelector('p').textContent = t.softwareDesc;
    }
    if (educContents[1]) {
        educContents[1].querySelector('h3').textContent = t.baccalaureat;
        educContents[1].querySelector('p').textContent = t.baccDesc;
    }
    if (educContents[2]) {
        educContents[2].querySelector('h3').textContent = t.certifications;
        educContents[2].querySelector('p').textContent = t.certDesc;
    }
    
    // Services page
    const servicesTitle = document.querySelector('#turn-2 .page-front .title');
    if (servicesTitle) servicesTitle.textContent = t.myServices;
    
    const serviceContents = document.querySelectorAll('.services-content');
    if (serviceContents[0]) {
        serviceContents[0].querySelector('h3').textContent = t.fullStackDev;
        serviceContents[0].querySelector('p').textContent = t.fullStackDesc;
        serviceContents[0].querySelector('.btn').textContent = t.readMore;
    }
    if (serviceContents[1]) {
        serviceContents[1].querySelector('h3').textContent = t.logoDesign;
        serviceContents[1].querySelector('p').textContent = t.logoDesc;
        serviceContents[1].querySelector('.btn').textContent = t.readMore;
    }
    if (serviceContents[2]) {
        serviceContents[2].querySelector('h3').textContent = t.uiuxDesign;
        serviceContents[2].querySelector('p').textContent = t.uiuxDesc;
        serviceContents[2].querySelector('.btn').textContent = t.readMore;
    }
    if (serviceContents[3]) {
        serviceContents[3].querySelector('h3').textContent = t.backendApi;
        serviceContents[3].querySelector('p').textContent = t.backendApiDesc;
        serviceContents[3].querySelector('.btn').textContent = t.readMore;
    }
    
    // Skills page
    const skillsTitle = document.querySelector('#turn-2 .page-back .title');
    if (skillsTitle) skillsTitle.textContent = t.mySkills;
    
    const skillsContents = document.querySelectorAll('.skills-content h3');
    if (skillsContents[0]) skillsContents[0].textContent = t.frontend;
    if (skillsContents[1]) skillsContents[1].textContent = t.backendLang;
    if (skillsContents[2]) skillsContents[2].textContent = t.toolsDesign;
    
    // Latest Project page
    const projectTitle = document.querySelector('#turn-3 .page-front .title');
    if (projectTitle) projectTitle.textContent = t.latestProject;
    
    const projectInfo = document.querySelector('.info-title h3');
    if (projectInfo) projectInfo.textContent = t.museumProject;
    
    const livePreview = document.querySelector('.info-title a');
    if (livePreview) livePreview.innerHTML = `${t.livePreview} <i class="bx bx-link-external"></i>`;
    
    const techUsedP = document.querySelector('.info-box p:first-of-type');
    if (techUsedP) techUsedP.textContent = t.techUsed;
    
    const projectDesc = document.querySelector('.info-box p:last-of-type');
    if (projectDesc) projectDesc.textContent = t.projectDesc;
    
    const projectBtns = document.querySelectorAll('.portfolio-box .btn-box .btn');
    if (projectBtns[0]) projectBtns[0].textContent = t.sourceCode;
    if (projectBtns[1]) projectBtns[1].textContent = t.moreProjects;
    
    // Contact page
    const contactTitle = document.querySelector('#turn-3 .page-back .title');
    if (contactTitle) contactTitle.textContent = t.contactTitle;
    
    const formFields = document.querySelectorAll('.contact-box .field');
    if (formFields[0]) formFields[0].placeholder = t.fullName;
    if (formFields[1]) formFields[1].placeholder = t.emailAddress;
    if (formFields[2]) formFields[2].placeholder = t.yourMessage;
    
    const sendBtn = document.querySelector('.contact-box .btn');
    if (sendBtn) sendBtn.value = t.sendMessage;
    
    const profileBtn = document.querySelector('.back-profile p');
    if (profileBtn) profileBtn.textContent = t.profile;
    
    // Update language selector
    updateLanguageSelector();
}

// Function to update language selector appearance
function updateLanguageSelector() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
}

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {

        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 - index;
            }, 500);

        }else{
            pageTurn.classList.add('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 + index;
            }, 500);
        }
    }
});


// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {

            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            },500);
        }, (index + 1) * 200 + 100)
    });
}


// create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0){
        pageNumber = totalPages - 1;
    }
}


// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();

            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)

    })
}


// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


// open animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);


pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();

        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)

}) 

// Initialize language system when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to language buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            translateContent(lang);
        });
    });
    
    // Set initial language
    translateContent(currentLang);
});