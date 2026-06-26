// Reveal-on-scroll + mobile nav toggle. No dependencies.

// Fade sections in as they enter the viewport.
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Mobile menu toggle.
const menuBtn = document.querySelector('.nav__menu');
const links = document.querySelector('.nav__links');
if (menuBtn && links) {
  menuBtn.addEventListener('click', () => links.classList.toggle('is-open'));
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => links.classList.remove('is-open'))
  );
}
