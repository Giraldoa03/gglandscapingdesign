// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for same-page anchor navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (name.trim() && email.trim() && message.trim()) {
            // Here you would typically send this data to a server
            alert(`¡Gracias ${name}! Tu mensaje ha sido recibido. Te contactaremos pronto.`);
            contactForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and gallery items
const serviceCards = document.querySelectorAll('.service-card');
const galleryItems = document.querySelectorAll('.gallery-item');

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

galleryItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add some interactivity to service cards
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    });
});

// Lazy load gallery images (placeholder)
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const img = this.querySelector('img');
        if (!img.src.includes('placeholder')) {
            img.style.opacity = '0.8';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const img = this.querySelector('img');
        img.style.opacity = '1';
    });
});

// Log when page loads
window.addEventListener('load', () => {
    console.log('G&G Landscaping Design website loaded successfully!');
});

// Scroll to top button functionality
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});


// i18n translation strings
const i18n = {
    es: {
        'nav.home': 'Home',
        'nav.services': 'Servicios',
        'nav.work': 'Our Work',
        'nav.gallery': 'Galería',
        'nav.contact': 'Contact Us',
        'contact.title': 'Contáctanos',
        'home.title': 'G&G Landscaping Design',
        'home.subtitle': 'Mantenimiento profesional de espacios verdes y remoción de nieve',
        'home.cta': 'Descubre Nuestros Servicios',
        'about.title': 'Sobre Nosotros',
        'about.text': 'En G&G Landscaping Design nos enfocamos en crear y mantener espacios verdes hermosos y funcionales. Tenemos años de experiencia en remoción de nieve, limpieza de hojas, corte de pasto y jardinería a nivel residencial y comercial.',
        'ourwork.title': 'Nuestro Trabajo',
        'ourwork.subtitle': 'Un vistazo rápido a algunos proyectos destacados. Haz clic en Ver Más para ver la galería completa.',
        'ourwork.more': 'Ver más en Our Work',
        'footer.quickLinks': 'Enlaces Rápidos',
        'services.title': 'Nuestros Servicios',
        'services.description': 'Atendemos con calidad y experiencia 4 servicios especializados:',
        'services.snow': 'Remoción de Nieve',
        'services.leaf': 'Limpieza de Hojas',
        'services.lawn': 'Corte de Pasto',
        'services.gardening': 'Jardinería',
        'services.snowText': 'Despeje de nieve en entradas, estacionamientos y áreas comerciales con equipo profesional.',
        'services.leafText': 'Recolección y eliminación segura de hojas para prevenir mosa, plagas y daños a jardineras.',
        'services.lawnText': 'Corte preciso y regular, ajustes de altura y cuidado estético para césped impecable.',
        'services.gardeningText': 'Diseño e instalación de áreas verdes, plantas y jardines con mantenimiento continuo.',
        'footer.followUs': 'Síguenos',
        'gallery.subtitle': 'Fotos y videos de nuestros trabajos',
        'contact.title': 'Contáctanos',
        'contact.locationLabel': 'Ubicación',
        'contact.locationValue': 'Hamilton, Ontario',
        'contact.phoneLabel': 'Teléfono',
        'contact.phoneValue': '+1 (365) 833-3580',
        'contact.emailLabel': 'Email',
        'contact.emailValue': 'info@gglandscaping.com',
        'contact.namePlaceholder': 'Tu Nombre',
        'contact.emailPlaceholder': 'Tu Email',
        'contact.messagePlaceholder': 'Tu Mensaje',
        'contact.submitButton': 'Enviar Mensaje',
        'footer.copy': '© 2026 G&G Landscaping Design. Todos los derechos reservados.'
    },
    en: {
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.work': 'Our Work',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact',
        'contact.title': 'Contact Us',
        'home.title': 'G&G Landscaping Design',
        'home.subtitle': 'Professional green space maintenance and snow removal',
        'home.cta': 'Discover Our Services',
        'about.title': 'About Us',
        'about.text': 'At G&G Landscaping Design we focus on creating and maintaining beautiful, functional green spaces. We have years of experience in snow removal, leaf cleaning, lawn mowing, and gardening for residential and commercial clients.',
        'ourwork.title': 'Our Work',
        'ourwork.subtitle': 'A quick look at some featured projects. Click View More to access the full gallery.',
        'ourwork.more': 'View More on Our Work',
        'footer.quickLinks': 'Quick Links',
        'services.title': 'Our Services',
        'services.description': 'We provide quality care across 4 specialized services:',
        'services.snow': 'Snow Removal',
        'services.leaf': 'Leaf Cleanup',
        'services.lawn': 'Lawn Mowing',
        'services.gardening': 'Gardening',
        'services.snowText': 'Snow clearing for driveways, parking lots, and commercial spaces with professional equipment.',
        'services.leafText': 'Safe leaf collection and disposal to prevent moss, pests, and planter damage.',
        'services.lawnText': 'Precise, regular mowing, height adjustments and aesthetic care for immaculate lawns.',
        'services.gardeningText': 'Design and installation of green areas, plants and gardens with ongoing maintenance.',
        'footer.followUs': 'Follow Us',
        'gallery.subtitle': 'Photos and videos from our work',
        'contact.title': 'Get In Touch',
        'contact.locationLabel': 'Location',
        'contact.locationValue': 'Hamilton, Ontario',
        'contact.phoneLabel': 'Phone',
        'contact.phoneValue': '+1 (365) 833-3580',
        'contact.emailLabel': 'Email',
        'contact.emailValue': 'info@gglandscaping.com',
        'contact.namePlaceholder': 'Your Name',
        'contact.emailPlaceholder': 'Your Email',
        'contact.messagePlaceholder': 'Your Message',
        'contact.submitButton': 'Send Message',
        'footer.copy': '© 2026 G&G Landscaping Design. All rights reserved.'
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('languageSwitcher');
    const defaultLang = localStorage.getItem('siteLang') || 'en';

    if (languageSwitcher) {
        languageSwitcher.value = defaultLang;

        languageSwitcher.addEventListener('change', () => {
            const selected = languageSwitcher.value;
            localStorage.setItem('siteLang', selected);
            setLanguage(selected);
        });
    }

    setLanguage(defaultLang);

    console.log('JavaScript loaded and ready!');
});
