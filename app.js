$(function() {
	/*Fixed Header*/
	let header = $('#header');
	let intro = $('#intro');
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let navToggle = $('#navToggle');
	let nav = $('#nav');

	$(window).on('scroll load resize', function() {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		if (scrollPos > introH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	});

	/*Smooth scroll*/
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		nav.toggleClass('show');

		$('html, body').animate({
			scrollTop: elementOffset - 70
		}, 700)
	})

	/*Nav toggle*/
		navToggle.on('click', function(event) {
		event.preventDefault();
		nav.toggleClass('show');
	})
});


