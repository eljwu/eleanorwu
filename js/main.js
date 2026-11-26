const motionButton = document.querySelector('.motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function updateMotion(paused) {
  document.documentElement.classList.toggle('motion-paused', paused);
  motionButton.setAttribute('aria-pressed', String(paused));
  motionButton.setAttribute('aria-label', paused ? 'Resume motion' : 'Pause motion');
  motionButton.textContent = paused ? '▶' : 'Ⅱ';
}
updateMotion(reducedMotion.matches);
if (reducedMotion.matches) motionButton.hidden = true;
motionButton.addEventListener('click', () => updateMotion(motionButton.getAttribute('aria-pressed') !== 'true'));
const links = [...document.querySelectorAll('.nav a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin:'-25% 0px -55% 0px'});
  document.querySelectorAll('main > section').forEach(section => observer.observe(section));
}
