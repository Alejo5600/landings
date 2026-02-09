// Botón Sticky CTA - Aparece después de hacer scroll
(function() {
    const stickyCta = document.getElementById('stickyCta');
    let lastScrollTop = 0;
    const scrollThreshold = 300; // Aparece después de 300px de scroll

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > scrollThreshold) {
            // Mostrar sticky CTA cuando se hace scroll hacia abajo
            if (scrollTop > lastScrollTop) {
                stickyCta.classList.add('show');
            } else {
                // Ocultar cuando se hace scroll hacia arriba (opcional)
                // stickyCta.classList.remove('show');
            }
        } else {
            stickyCta.classList.remove('show');
        }
        
        lastScrollTop = scrollTop;
    });
})();

// Scroll suave para enlaces internos
(function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
})();

// Tracking de clicks en CTAs (opcional - para analytics)
(function() {
    const ctaButtons = document.querySelectorAll('.cta-button, .sticky-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aquí puedes agregar tracking de eventos
            // Ejemplo: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': 'Hotmart Checkout' });
            console.log('CTA clicked:', this.href);
        });
    });
})();

// Animación de entrada para elementos al hacer scroll (opcional)
(function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a secciones principales
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
})();
