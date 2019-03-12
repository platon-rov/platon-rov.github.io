$(function() {

	// Custom JS
	function resizeLongPhoto() {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		if(h < 768) {
			let longPhoto = document.querySelector('.gallery-item__long img');
			let afterLongPhoto = document.querySelectorAll('.gallery-item img')[3];
			longPhoto.style.height = afterLongPhoto.clientHeight + 'px';
			longPhoto.style.width = afterLongPhoto.clientWidth + 'px';
		}
	}

	resizeLongPhoto();
	var resizeTimer;
	$(window).on('resize', function(e) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			resizeLongPhoto();   	     
		}, 250);
	});
});