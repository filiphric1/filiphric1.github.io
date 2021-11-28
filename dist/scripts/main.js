$(function () {

	$('body').scrollspy({ target: '#navbar-menu', offset: 85 });

    // Hamburger animace a sbalení/rozbalení menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.custom-navbar-content');

	// Sbalení/rozbalení po kliknutí hamburger
    hamburger.addEventListener('click', mobileMenu);

	// Sbalení menu po kliknutí na položku v menu
	document.querySelectorAll('.nav-link').forEach(item => {
		item.addEventListener('click', event => {
			mobileMenu();
		})
	});

	// Funkce sbalení/rozbalení
    function mobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }


	// Smrsknutí menu po odscrollování
	function isScroll() {
		if ($(document).scrollTop() > 50) {
			$('.custom-navbar').addClass('navbar-scroll');
		} else {
			$('.custom-navbar').removeClass('navbar-scroll');
		}
	}
	isScroll();

	$(document).on('scroll', function() {
		isScroll();
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