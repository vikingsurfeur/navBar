const   header          = document.querySelector(".header"),
        curtain         = document.querySelector(".curtain"),
        menuResponsive  = document.querySelector(".menu__responsive"),
        burger          = document.querySelector(".header__nav__burger"),
        closeToggle     = document.querySelector(".menu__responsive__toggle");

// EVENT LISTENERS

window.addEventListener("scroll", turnBlack);
burger.addEventListener("click", menuOpener);
closeToggle.addEventListener("click", menuCloser);

// FUNCTIONS

function turnBlack() {
    header.classList.toggle("header__turn__black", window.scrollY > 0);
}

function menuOpener() {
    menuResponsive.classList.add("menu__responsive__open");
    curtain.classList.add("menu__responsive__open");
}

function menuCloser() {
    menuResponsive.classList.remove("menu__responsive__open");
    setTimeout(() => {
        curtain.classList.remove("menu__responsive__open");
    }, 500);
}
