document.addEventListener("DOMContentLoaded", function(evt) {
	// Hamburger animace a sbalení/rozbalení menu
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.custom-navbar-content');

	// Sbalení/rozbalení po kliknutí hamburger
	hamburger.addEventListener('click', mobileMenu);

	// Sbalení menu po kliknutí na položku v menu
	let navLinks = document.querySelectorAll('.nav-link');
	[...navLinks].forEach(item => {
		item.addEventListener('click', (evt) => {
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
		const scrollTop = document.documentElement.scrollTop;
		const navbar = document.getElementById('custom-navbar');

		if (scrollTop > 50) {
			navbar.classList.add('navbar-scroll');
		} else {
			navbar.classList.remove('navbar-scroll');
		}
	}

	isScroll();

	document.addEventListener('scroll', () => {
		isScroll();
		setIntroHeight();
	});

	// Image gallery width & height settings
	let images = document.querySelectorAll("#my-gallery img");
	[...images].forEach((img) => {
		let a = img.parentElement;
		img.addEventListener("load", () => {
			console.log(img.src, img.naturalWidth);
			a.setAttribute("data-pswp-width", img.naturalWidth);
			a.setAttribute("data-pswp-height", img.naturalHeight);
		});
	});

	// Footer current year
	const year = document.getElementById("year");
	year.innerText = new Date().getFullYear();
});