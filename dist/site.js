"use strict";

(function () {
	var basePath = "content/img/";
	var origSrc = basePath + "ts-logo-white.png";
	var hoverSrc = basePath + "ts-logo-orange.png";
	var imgs = $(".js-img-nav-brand");
	var count = 1;
	imgs.each(function () {
		$(this).hover(function () {
			$(this).attr('src', hoverSrc);
		}, function () {
			$(this).attr('src', origSrc);
		});
	});
})();