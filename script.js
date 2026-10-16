const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });
}

// The source image shows four separate pages. This shared file supports both
// the individual HTML files and a single-page preview via ?page=logistics.
const pageNames = ['home', 'logistics', 'training', 'support'];
const path = window.location.pathname.toLowerCase();
const queryPage = new URLSearchParams(window.location.search).get('page');
let currentPage = queryPage || (path.includes('logistics-software') ? 'logistics'
  : path.includes('training') ? 'training'
  : path.includes('support') ? 'support' : 'home');

document.querySelectorAll('[data-page-section]').forEach(section => {
  section.hidden = section.dataset.pageSection !== currentPage;
});
document.querySelectorAll('.main-nav [data-page]').forEach(link => {
  if (link.dataset.page === currentPage) link.classList.add('active');
});

const titles = {
  home: 'S3 Cube Solutions | Smarter Logistics',
  logistics: 'Logistics Software | S3 Cube Solutions',
  training: 'Industry Training | S3 Cube Solutions',
  support: 'Implementation & Support | S3 Cube Solutions'
};
document.title = titles[currentPage] || titles.home;
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  });
});

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('.form-status');
    status.textContent = 'Thanks! Your enquiry is ready. Connect this form to your email or backend to receive submissions.';
    form.reset();
  });
}
