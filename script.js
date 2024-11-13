const menu = document.getElementById('menu');
const menuToggle = document.getElementById('menuToggle');
const body = document.body;

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.classList.toggle('active');
});

body.addEventListener('click', (e) => {
  if (menu.classList.contains('active') && !menu.contains(e.target) && e.target !== menuToggle) {
    menu.classList.remove('active');
  }
});

menu.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');
  const currentDomain = window.location.hostname;

  links.forEach(link => {
    const linkHost = new URL(link.href).hostname;
    if (linkHost !== currentDomain) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const redirectUrl = link.href;

        window.open(`redirect.html?url=${encodeURIComponent(redirectUrl)}`, '_blank');
      });
    }
  });
});
