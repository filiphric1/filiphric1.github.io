const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');
const contactDialog = document.getElementById('contactDialog');
const contactDialogPanel = contactDialog?.querySelector('.contact-dialog__panel');
const contactDialogTriggers = document.querySelectorAll('[data-contact-dialog-trigger]');
const contactDialogCloseControls = document.querySelectorAll('[data-contact-dialog-close]');

let lastFocusedElement = null;

const isMenuOpen = () => toggle?.getAttribute('aria-expanded') === 'true';
const isContactDialogOpen = () => contactDialog?.classList.contains('contact-dialog--open');

const syncBodyScrollLock = () => {
	document.body.classList.toggle('no-scroll', Boolean(isMenuOpen() || isContactDialogOpen()));
};

const closeMenu = () => {
	if (!toggle || !menu) {
		return;
	}

	toggle.setAttribute('aria-expanded', 'false');
	menu.classList.remove('navbar__menu--open');
	syncBodyScrollLock();
};

const openContactDialog = () => {
	if (!contactDialog || !contactDialogPanel) {
		return;
	}

	lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
	contactDialog.classList.add('contact-dialog--open');
	contactDialog.setAttribute('aria-hidden', 'false');
	syncBodyScrollLock();
	contactDialogPanel.focus();
};

const closeContactDialog = () => {
	if (!contactDialog) {
		return;
	}

	contactDialog.classList.remove('contact-dialog--open');
	contactDialog.setAttribute('aria-hidden', 'true');
	syncBodyScrollLock();

	if (lastFocusedElement instanceof HTMLElement) {
		lastFocusedElement.focus();
	}
};

const trapContactDialogFocus = (event) => {
	if (event.key !== 'Tab' || !contactDialog || !isContactDialogOpen()) {
		return;
	}

	const focusableElements = contactDialog.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
	if (!focusableElements.length) {
		return;
	}

	const firstElement = focusableElements[0];
	const lastElement = focusableElements[focusableElements.length - 1];
	const activeElement = document.activeElement;

	if (event.shiftKey && activeElement === firstElement) {
		event.preventDefault();
		lastElement.focus();
	}

	if (!event.shiftKey && activeElement === lastElement) {
		event.preventDefault();
		firstElement.focus();
	}
};

if (toggle && menu) {
	toggle.addEventListener('click', () => {
		const isOpen = toggle.getAttribute('aria-expanded') === 'true';
		toggle.setAttribute('aria-expanded', String(!isOpen));
		menu.classList.toggle('navbar__menu--open');
		syncBodyScrollLock();
	});

	document.querySelectorAll('.navbar__link, .navbar__cta').forEach((link) => {
		link.addEventListener('click', () => {
			closeMenu();
		});
	});
}

contactDialogTriggers.forEach((trigger) => {
	trigger.addEventListener('click', (event) => {
		event.preventDefault();
		openContactDialog();
	});
});

contactDialogCloseControls.forEach((control) => {
	control.addEventListener('click', () => {
		closeContactDialog();
	});
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeContactDialog();
		closeMenu();
	}

	trapContactDialogFocus(event);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (!href) {
			return;
		}

		if (href === '#top') {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
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
