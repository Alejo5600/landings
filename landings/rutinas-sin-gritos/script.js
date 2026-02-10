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
                stickyCta.classList.remove('hidden');
            }
        } else {
            stickyCta.classList.add('hidden');
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
    const ctaButtons = document.querySelectorAll('a[href*="hotmart"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aquí puedes agregar tracking de eventos
            // Ejemplo: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': 'Hotmart Checkout' });
            console.log('CTA clicked:', this.href);
        });
    });
})();
