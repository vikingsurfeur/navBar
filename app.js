const   menuResponsive  = document.querySelector('.menu__responsive'),
        burger          = document.querySelector('.header__nav__burger'),
        closeToggle     = document.querySelector('.menu__responsive__toggle');

// EVENT LISTENERS

burger.addEventListener('click', menuOpener);
closeToggle.addEventListener('click', menuCloser);

// FUNCTIONS

function menuOpener() {
    menuResponsive.classList.add('menu__responsive__open');
}

function menuCloser() {
    menuResponsive.classList.remove('menu__responsive__open');
}