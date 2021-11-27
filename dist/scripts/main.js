$(function () {

	let scrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: '#navbar-menu',
		offset: 96,
	})

    // Hamburger animace a sbalení/rozbalení menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.custom-navbar-content');

    hamburger.addEventListener('click', mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

	// Smrsknutí menu po odscrollování
	$(document).on('scroll', function() {

		if ($(document).scrollTop() > 50) {
			$('.custom-navbar').addClass('navbar-scroll');
		} else {
			$('.custom-navbar').removeClass('navbar-scroll');
		}

	});

    // Animovaný nadpis na homepage
	if ($('#heading').length) {

		let typeText = document.querySelector('#heading');
		let textToBeTyped = typeText.innerText;
		let index = 0;

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
				typeText.style.color = '#fff';
				typeText.style.setProperty('--pseudo-color', '#fff');
				playAnim()
			}, 100)
		}
		playAnim()

	}

});