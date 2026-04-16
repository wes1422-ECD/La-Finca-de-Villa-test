/* La Finca de Villa — Main JS */

// ---- Mobile Nav ----
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // close on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav__container')) {
      links.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ---- Active Nav Link ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ---- Hero parallax / load animation ----
const heroBg = document.querySelector('.hero__bg');
if (heroBg) {
  heroBg.classList.add('loaded');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroBg.style.transform = `scale(1) translateY(${scrolled * 0.3}px)`;
  }, { passive: true });
}

// ---- Menu sticky sub-nav active state ----
const menuSections = document.querySelectorAll('.menu-body section[id]');
const menuNavLinks = document.querySelectorAll('.menu-nav__list a');

if (menuSections.length && menuNavLinks.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        menuNavLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.menu-nav__list a[href="#${entry.target.id}"]`);
        if (active) {
          active.classList.add('active');
          // scroll sub-nav to show active link
          active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    });
  }, { rootMargin: '-30% 0px -65% 0px' });

  menuSections.forEach(s => observer.observe(s));
}

// ---- Smooth scroll for anchor links ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight || 80;
      const menuNavH = document.querySelector('.menu-nav')?.offsetHeight || 0;
      const offset = navH + menuNavH + 16;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});

// ---- Fade-in on scroll ----
const fadeEls = document.querySelectorAll('.dish-card, .location-card, .value-card, .catering-card, .gallery-item');
if ('IntersectionObserver' in window && fadeEls.length) {
  fadeEls.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity .5s ease, transform .5s ease'; });
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => fadeObserver.observe(el));
}
