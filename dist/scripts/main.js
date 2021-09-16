$(function () {

	let scrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: '#navbar-menu',
		offset: 96,
	})

    // Hamburger animace a sbalení/rozbalení menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".custom-navbar-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

	// Smrsknutí menu po odscrollování
	$(document).on("scroll", function() {

		if ($(document).scrollTop() > 50) {
			$(".custom-navbar").addClass("navbar-scroll");
		} else {
			$(".custom-navbar").removeClass("navbar-scroll");
		}

	});

    // Animovaný nadpis na homepage
	if ($('#heading').length) {

		let typeText = document.querySelector("#heading");
		let textToBeTyped = typeText.innerText;
		let index = 0, isAdding = true;

		function playAnim() {
			setTimeout(function () {
				typeText.innerText = textToBeTyped.slice(0, index)
				if (index > textToBeTyped.length) {
					// animace dojela na konec
					return false
				} else {
					// přidá 1 písmeno
					index++
				}
				playAnim()
			}, 200)
		}
		playAnim()

	}

    // Spuštění timeline animace
	if ($("#timeline-section").length > 0) {

		function animateTimeline() {
			$('.timeline-item').each(function(i) {
				let item = $(this);
				setTimeout(function() {
					item.fadeIn();
				}, 800*i);
			});
		}

		$('.timeline-item').each(function() {
			$(this).hide();
		});

        $(window).scroll(function() {
            var top_of_element = $("#timeline-section").offset().top;
            var bottom_of_element = $("#timeline-section").offset().top + $("#timeline-section").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight() - 200;
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                animateTimeline();
            }
        });
	}

});