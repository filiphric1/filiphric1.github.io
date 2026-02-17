const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

if (toggle && menu) {
	toggle.addEventListener('click', () => {
		const isOpen = toggle.getAttribute('aria-expanded') === 'true';
		toggle.setAttribute('aria-expanded', String(!isOpen));
		menu.classList.toggle('navbar__menu--open');
		document.body.classList.toggle('no-scroll', !isOpen);
	});

	document.querySelectorAll('.navbar__link, .navbar__cta').forEach((link) => {
		link.addEventListener('click', () => {
			toggle.setAttribute('aria-expanded', 'false');
			menu.classList.remove('navbar__menu--open');
			document.body.classList.remove('no-scroll');
		});
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			toggle.setAttribute('aria-expanded', 'false');
			menu.classList.remove('navbar__menu--open');
			document.body.classList.remove('no-scroll');
		}
	});
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (!href) {
			return;
		}

		const target = document.querySelector(href);
		if (target) {
			e.preventDefault();
			const offset = 80;
			const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	});
});

window.addEventListener('scroll', () => {
	const navbar = document.querySelector('.navbar');
	if (navbar) {
		navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
	}
});

const currentYear = document.getElementById('currentYear');
if (currentYear) {
	currentYear.textContent = String(new Date().getFullYear());
}
