$(document).ready(function() {
    // Po zahájení scrollování se smrskne menu
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() >
                50) {
                $('.site-header').addClass('site-header-scroll');
            }
            if ($(this).scrollTop() <
                50) {
                $('.site-header').removeClass('site-header-scroll');
            }
        });
    });
    // Ošetření smrklého menu při načtení již zascrollované stránky
    $(function() {
        if ($(window).scrollTop() > 50) {
            $('.site-header').addClass('site-header-scroll');
        }
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
            $('.main-menu, .socials').addClass('mobile');
        } else {
            $('.main-menu, .socials').removeClass('mobile');
        }
    }
    $(document).ready(function() {
        $(window).resize(resize);
        resize();
    });
    // Rozkrytí/skrytí menu přes hamburger
    $(function() {
        $('.hamburger').click(function() {
            $('.main-menu, .socials').toggleClass('mobile');
        });
    });
    // Označení active linku v menu při kliknutí/scrollování na sekci
    // cache the navigation links
    var $navigationLinks = $('.main-menu > li > a');
    // cache (in reversed order) the sections
    var $sections = $($(".scrollSection").get().reverse());

    // map each section id to their corresponding navigation link
    var sectionIdTonavigationLink = {};
    $sections.each(function() {
        var id = $(this).attr('id');
        sectionIdTonavigationLink[id] = $('.main-menu > li > a[href=\\#' + id + ']');
    });

    // throttle function, enforces a minimum time interval
    function throttle(fn, interval) {
        var lastCall, timeoutId;
        return function() {
            var now = new Date().getTime();
            if (lastCall && now < (lastCall + interval)) {
                // if we are inside the interval we wait
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                    lastCall = now;
                    fn.call();
                }, interval - (now - lastCall));
            } else {
                // otherwise, we directly call the function
                lastCall = now;
                fn.call();
            }
        };
    }

    function highlightNavigation() {
        // get the current vertical position of the scroll bar
        var scrollPosition = $(window).scrollTop();

        // iterate the sections
        $sections.each(function() {
            var currentSection = $(this);
            // get the position of the section
            var sectionTop = currentSection.offset().top - 100;

            // if the user has scrolled over the top of the section
            if (scrollPosition >= sectionTop) {
                // get the section id
                var id = currentSection.attr('id');
                // get the corresponding navigation link
                var $navigationLink = sectionIdTonavigationLink[id];
                // if the link is not active
                if (!$navigationLink.hasClass('active')) {
                    // remove .active class from all the links
                    $navigationLinks.removeClass('active');
                    // add .active class to the current link
                    $navigationLink.addClass('active');
                }
                // přidání třídy active sekci kontakt při scrollu na konec stránky
                if ($(window).scrollTop() + $(window).height() > $(document).height() -
                    2) {
                    $navigationLinks.removeClass('active');
                    $('.scrollFix').addClass('active');
                } else {
                    $('.scrollFix').removeClass('active');
                }
                // we have found our section, so we return false to exit the each loop
                return false;
            }


        });
    }
    $(window).scroll(throttle(highlightNavigation, 300));

    // lightbox galerie
    var overlay = $('<div/>', { id: 'overlay' }),
        gallery = $('.galerie-content');
    overlay.appendTo('body').hide();

    gallery.find('a').on('click', function(event) {
        var href = $(this).attr('href'),
            image = $('<img>', { src: href });
        overlay.html(image).show();

        event.preventDefault();
    });
    overlay.on('click', function() {
        overlay.hide();
    });
    // šipka pro návrat nahoru stránky
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $('.back-to-top').removeClass('back-to-top-hide');
        } else {
            $('.back-to-top').addClass('back-to-top-hide');
        }
    });
});