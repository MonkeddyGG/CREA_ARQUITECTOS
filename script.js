document.addEventListener('DOMContentLoaded', () => {

    // 1. Barra de navegación con efecto Glassmorphism al hacer scroll
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Animaciones elegantes de aparición (Scroll Reveal)
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.1, // El elemento aparece cuando el 10% es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Dejar de observar para optimizar memoria
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // 3. Desplazamiento suave para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Compensar el tamaño de la barra fija
                    behavior: 'smooth'
                });
            }
        });
    });

});