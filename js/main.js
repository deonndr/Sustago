
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('is-open');
  });

  // code saat burger button di close
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('is-open');
    });
  });



  document.querySelectorAll('.pill-active, .pill-inactive').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pill-active, .pill-inactive').forEach(b => {
        b.classList.remove('pill-active');
        b.classList.add('pill-inactive');
      });
      btn.classList.remove('pill-inactive');
      btn.classList.add('pill-active');
    });
  });

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  });

  // Code navbar aktif
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= (sectionTop - 200)) { 
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('#navbar a[href^="#"]').forEach(link => {
      const isMobile = link.closest('#mobile-menu') !== null;
      
      link.classList.remove('text-ocean-900', 'font-semibold');
      if (isMobile) {
        link.classList.add('text-slate-600', 'font-medium');
      } else {
        link.classList.add('text-slate-700', 'font-medium');
      }

      if (link.getAttribute('href') === `#${current}`) {
        if (isMobile) {
          link.classList.remove('text-slate-600', 'font-medium');
        } else {
          link.classList.remove('text-slate-700', 'font-medium');
        }
        link.classList.add('text-ocean-900', 'font-semibold');
      }
    });
  });

  // Buat gerakin carousel nya
  const destCarousel = document.getElementById('dest-carousel');
  const destPrev = document.getElementById('dest-prev');
  const destNext = document.getElementById('dest-next');

  if (destCarousel && destPrev && destNext) {
    const scrollAmount = 320;

    destPrev.addEventListener('click', () => {
      destCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    destNext.addEventListener('click', () => {
      destCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // Animasi reveal pas scroll
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));
