// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuPhoto = document.querySelector('.menu-photo');
const navItems = document.querySelectorAll('.nav-item');

if (menuBtn && menu && menuNav && menuPhoto) {
    menuBtn.addEventListener('click', toggleMenu);
}

function toggleMenu() {
    const showMenu = menuBtn.getAttribute('aria-expanded') === 'true';

    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuPhoto.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuPhoto.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
    }

    menuBtn.setAttribute('aria-expanded', String(!showMenu));
}
