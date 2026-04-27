
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
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
