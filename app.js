const   header          = document.querySelector('.header'),
        curtain         = document.querySelector('.curtain'),
        menuResponsive  = document.querySelector('.menu__responsive'),
        burger          = document.querySelector('.header__nav__burger'),
        closeToggle     = document.querySelector('.menu__responsive__toggle');

// EVENT LISTENERS

header.addEventListener('scroll', turnBlack);
burger.addEventListener('click', menuOpener);
closeToggle.addEventListener('click', menuCloser);

// FUNCTIONS

function turnBlack() {
    if(window.scrollY > 0) {
        header.classList.add('header__turn__black');
    } else {
        header.classList.remove('header__turn__black');
    }
}

function menuOpener() {
    menuResponsive.classList.add('menu__responsive__open');
    curtain.classList.add('menu__responsive__open');
}

function menuCloser() {
    menuResponsive.classList.remove('menu__responsive__open');
    setTimeout(() => {
        curtain.classList.remove('menu__responsive__open');
    }, 500);   
}