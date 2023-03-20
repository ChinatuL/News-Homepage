const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".side-bar");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__item");
const iconOpen = document.querySelector(".menu-btn__open");
const iconClose = document.querySelector(".menu-btn__close");

const openNav = () => {
    nav.classList.toggle("show-nav");
    sideBar.classList.toggle("slide-in");
    menuBtn.classList.toggle("animate-btn");
    navLinks.forEach((link) => {
        link.classList.toggle("fade-in");
    });
};

const showHarmburger = () => {
    iconOpen.style.display = "block";
    iconClose.style.display = "none";
};

const hideHarmburger = () => {
    iconOpen.style.display = "none";
    iconClose.style.display = "block";
};

menuBtn.addEventListener("click", () => {
    openNav();
    if (nav.classList.contains("show-nav")) {
        menuBtn.setAttribute("aria-expanded", "true");
        hideHarmburger();
    } else {
        menuBtn.setAttribute("aria-expanded", "false");
        showHarmburger();
    }
});
