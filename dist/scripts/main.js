$(function () {

    // vlastní skripty
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".custom-navbar-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

});