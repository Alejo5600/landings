// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('¡Botón clickeado! Esta es una landing de prueba.');
            
            // Ejemplo de interacción adicional
            const hero = document.querySelector('.hero');
            if (hero) {
                hero.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    hero.style.transform = 'scale(1)';
                }, 200);
            }
        });
    }
    
    // Animación suave al cargar
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    console.log('Landing de prueba cargada correctamente');
});
