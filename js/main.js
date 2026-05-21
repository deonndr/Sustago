
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

// ANIMASI FAQ
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const parentItem = toggle.closest('.faq-item');
    const content = parentItem.querySelector('.faq-content');
    const icon = toggle.querySelector('.faq-icon');
    const isActive = toggle.dataset.active === 'true';

    // Code buat nutup semua pertanyaan lain yang lagi kebuka
    faqToggles.forEach(otherToggle => {
      if (otherToggle !== toggle) {
        const otherItem = otherToggle.closest('.faq-item');
        const otherContent = otherItem.querySelector('.faq-content');
        const otherIcon = otherToggle.querySelector('.faq-icon');

        otherToggle.dataset.active = 'false';
        otherContent.style.maxHeight = '0';
        otherIcon.textContent = '+';
        otherIcon.classList.remove('bg-ocean-600', 'text-white');
        otherIcon.classList.add('bg-ocean-200', 'text-label');
      }
    });

    // Toggle pertanyaan yang diklik
    if (isActive) {
      toggle.dataset.active = 'false';
      content.style.maxHeight = '0';
      icon.textContent = '+';
      icon.classList.remove('bg-ocean-600', 'text-white');
      icon.classList.add('bg-ocean-200', 'text-label');
    } else {
      toggle.dataset.active = 'true';
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.textContent = '−';
      icon.classList.remove('bg-ocean-200', 'text-label');
      icon.classList.add('bg-ocean-600', 'text-white');
    }
  });
});
