$(document).ready(function () {
	// šipka pro návrat nahoru stránky
	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
			$('.back-to-top').removeClass('back-to-top-hide');
		} else {
			$('.back-to-top').addClass('back-to-top-hide');
		}
	});

	// rok v patičce
	document.getElementById('year').innerHTML = new Date().getFullYear();
});
