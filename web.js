/* NAV TOGGLE */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* CLOSE MENU ON LINK CLICK */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        var menuBtn = document.getElementById("myNavMenu");
        menuBtn.className = "nav-menu";
    });
});

/* NAV SHADOW ON SCROLL */
window.onscroll = function () { headerShadow(); scrollActive(); };

function headerShadow() {
    const nav = document.getElementById("header");
    if (document.documentElement.scrollTop > 50) {
        nav.style.boxShadow = "0 2px 20px rgba(194, 132, 90, 0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
}

/* ACTIVE NAV LINK ON SCROLL */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}

/* LIGHTBOX */
function openLightbox(src, title, issuer) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-issuer').textContent = issuer;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function closeLightboxOutside(e) {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 900,
    delay: 100,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    reset: false
});

sr.reveal('.hero-tag', { delay: 100 });
sr.reveal('.hero-name', { delay: 150 });
sr.reveal('.hero-sub', { delay: 200 });
sr.reveal('.hero-desc', { delay: 250 });
sr.reveal('.hero-actions', { delay: 300 });
sr.reveal('.social-row', { delay: 350 });
sr.reveal('.hero-right', { delay: 200, origin: 'right' });

sr.reveal('.section-label', {});
sr.reveal('.section-title', { delay: 100 });

sr.reveal('.about-text', { origin: 'left', delay: 150 });
sr.reveal('.about-skills-col', { origin: 'right', delay: 150 });

sr.reveal('.project-card', { interval: 100 });
sr.reveal('.cert-card', { interval: 80 });

sr.reveal('.contact-left', { origin: 'left', delay: 100 });
sr.reveal('.contact-right', { origin: 'right', delay: 100 });