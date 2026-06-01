// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const metaThemeColor = document.querySelector('meta[name="theme-color"]');

function setTheme(theme) {
    html.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        metaThemeColor.setAttribute('content', '#ffffff');
    } else {
        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
        metaThemeColor.setAttribute('content', '#4f46e5');
    }
}

// Cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-bs-theme');
    setTheme(current === 'light' ? 'dark' : 'light');
});

// ==================== SCROLL REVEAL ====================
function handleScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => observer.observe(reveal));
}

// ==================== CONTACT FORM ====================
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) {
        console.warn("Formulario de contacto no encontrado");
        return;
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = this.querySelector('button');
        const originalText = btn.textContent;

        btn.innerHTML = 'Enviando <i class="bi bi-hourglass-split"></i>';
        btn.disabled = true;

        setTimeout(() => {
            alert('✅ ¡Mensaje enviado con éxito! Gracias por contactarme.');
            contactForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1300);
    });
}

// ==================== INICIALIZACIÓN ====================
function init() {
    handleScrollReveal();
    handleContactForm();
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);

// Backup por si ya cargó
if (document.readyState === 'complete') {
    init();
}