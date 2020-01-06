// Po zahájení scrollování se smrskne menu
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >
            50) {
            $('.site-header').addClass(
                'site-header-scroll'
            );
        }
        if ($(this).scrollTop() <
            50) {
            $('.site-header').removeClass(
                'site-header-scroll'
            );
        }
    });
});
// Vyznačení sekce po kliknutí na link v menu
$(function() {
    $('.main-menu a').click(function() {
        $('.main-menu a').removeClass(
            'active');
        $(this).addClass('active');
    });
});
// Při kliknutí na logo odznačení aktivního linku v menu
$(function() {
    $('.logo').click(function() {
        $('.main-menu a').removeClass(
            'active');
    });
});
// Při zobrazení hamburger buttonu skrýt menu a socials
function resize() {
    if ($(window).width() <= 760) {
        $('.main-menu, .socials').addClass(
            'mobile');
    } else {
        $('.main-menu, .socials').removeClass(
            'mobile');
    }
}
$(document).ready(function() {
    $(window).resize(resize);
    resize();
});
// Rozkrytí/skrytí menu přes hamburger
$(function() {
    $('.hamburger').click(function() {
        $('.main-menu, .socials').toggleClass(
            'mobile');
    });
});