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