// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

// Contact form
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (success) {
      success.style.display = 'block';
      form.reset();
    }
  });
}
