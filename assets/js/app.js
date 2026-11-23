/* La navegación y el contenido siguen disponibles si JavaScript está desactivado. */
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
const mobileViewport = window.matchMedia('(max-width: 959px)');

function closeMenu(returnFocus = false) {
  mainNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  if (returnFocus) menuButton.focus();
}

menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  const opening = !mainNav.classList.contains('is-open');
  mainNav.classList.toggle('is-open', opening);
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Cerrar menú' : 'Abrir menú');
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mainNav.classList.contains('is-open')) closeMenu(true);
});

document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});

mainNav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});

document.querySelector('.site-header').addEventListener('focusout', event => {
  if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
});

mobileViewport.addEventListener('change', () => closeMenu());
