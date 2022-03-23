//internal_link
$(function() {
	$('.tonamove').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});

// clear url
function urlClear(char) {
	url = window.location.toString().split(char)[0];
	window.history.replaceState({}, document.title, url);
}