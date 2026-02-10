// Optimizado para evitar reflows forzados usando requestAnimationFrame
(function() {
  'use strict';
  
  // Sticky CTA con throttling usando requestAnimationFrame
  const stickyCta = document.getElementById('stickyCta');
  if (stickyCta) {
    let ticking = false;
    let lastScrollY = 0;
    
    function updateStickyCta() {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const shouldShow = scrollY > 500;
      const isHidden = stickyCta.classList.contains('hidden');
      
      // Solo actualizar si el estado cambió
      if (shouldShow && isHidden) {
        stickyCta.classList.remove('hidden');
      } else if (!shouldShow && !isHidden) {
        stickyCta.classList.add('hidden');
      }
      
      lastScrollY = scrollY;
      ticking = false;
    }
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateStickyCta);
        ticking = true;
      }
    }, { passive: true });
  }
  
  // Scroll reveal con IntersectionObserver (ya optimizado)
  const scrollRevealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.scroll-reveal').forEach(function(el) {
    scrollRevealObserver.observe(el);
  });
  
  // Contadores animados - optimizado para evitar reflows
  document.querySelectorAll('.counter').forEach(function(counter) {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const increment = target / 100;
    let current = 0;
    let animationId = null;
    
    const observer = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) {
        function animate() {
          current += increment;
          if (current < target) {
            // Usar textContent en lugar de innerText para mejor rendimiento
            counter.textContent = Math.ceil(current);
            animationId = requestAnimationFrame(animate);
          } else {
            counter.textContent = target;
            cancelAnimationFrame(animationId);
          }
        }
        animate();
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    observer.observe(counter);
  });
  
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Tracking de clicks en CTAs (sin cambios)
  document.querySelectorAll('a[href*="hotmart"]').forEach(function(link) {
    link.addEventListener('click', function() {
      console.log('CTA clicked:', this.href);
    });
  });
})();
