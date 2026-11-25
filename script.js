// Starter website interactions — no frameworks or dependencies required.

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const copyButton = document.getElementById('copy-domain');
const feedback = document.getElementById('copy-feedback');

if (copyButton && feedback) {
  copyButton.addEventListener('click', async () => {
    const address = 'https://eleanorwu.com';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(address);
      feedback.textContent = 'Copied: ' + address;
    } catch {
      feedback.textContent = 'Website address: ' + address + ' (select to copy)';
    }
  });
}
