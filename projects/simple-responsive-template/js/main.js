// Filtrování v galerii
$(document).ready(function() {

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

// Při zobrazení hamburger buttonu skrýt menu a socials
function resize() {
    if ($(window).width() < 975) {
        $('.site-menu').addClass('mobile');
    } else {
        $('.site-menu').removeClass('mobile');
    }
}
$(document).ready(function() {
    $(window).resize(resize);
    resize();
});
// Rozkrytí/skrytí menu přes hamburger
$(function() {
    $('.hamburger').click(function() {
        $('.site-menu').toggleClass('mobile');
    });
});