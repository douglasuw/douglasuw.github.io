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


// call to whatsapp
$("#zap").click(function(){
	window.open("https://api.whatsapp.com/send?phone=+5548988272159");
});


// viewer image
$(".image-apto").click(function(){
	$("body").addClass("block");
	$("#imageview img").attr("src", $(this).attr("src"));
	$("#imageview").css("display","flex");
});
$("#imageview-close").click(function(){
	$("body").removeClass("block");
	$("#imageview").css("display","none");
});
// controls viewer image
$("#imageview-prev").click(function () {
	var currentSrc = $("#imageview-print").attr("src");
	var images = $(".image-apto");
	var currentIndex = $(".image-apto[src='" + currentSrc + "']").index();

	var prevIndex = (currentIndex - 1 + images.length) % images.length;
	var prevSrc = images.eq(prevIndex).attr("src");
	$("#imageview-print").attr("src", prevSrc);
});
$("#imageview-next").click(function () {
	var currentSrc = $("#imageview-print").attr("src");
	var images = $(".image-apto");
	var currentIndex = $(".image-apto[src='" + currentSrc + "']").index();

	var nextIndex = (currentIndex + 1) % images.length;
	var nextSrc = images.eq(nextIndex).attr("src");
	$("#imageview-print").attr("src", nextSrc);
});


// URL params
$(document).ready(function() {
	function obterValorParametro(parametro) {
		const url = new URL(window.location.href);
		return url.searchParams.get(parametro);
	}
	const valorP = obterValorParametro('p');
	if (valorP !== null) {
		$("#cover-price").text("R$ "+valorP+".000,00");
	}
});