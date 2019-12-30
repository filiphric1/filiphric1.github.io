$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.site-header').addClass('site-header-scroll');
        }
        if ($(this).scrollTop() < 50) {
            $('.site-header').removeClass('site-header-scroll');
        }
    });
});