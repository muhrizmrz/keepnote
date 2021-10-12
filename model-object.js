var model = (function() {
	var $window = $(window);
	var $model = $('<div class="model"/>');
	var $content = $('<div class="model-content" />');
	var $close = $('.model-close');

	$model.append($content);

	$close.on('click',function(e){
		e.preventDefault();
		model.close();
	});

	return {
		center: function() {
			var top = Math.max($window.height() - $model.outerHeight(),0) / 2;
			var left = Math.max($window.width() - $model.outerWidth(),0) / 2;
			$model.css( {
				top: top + $window.scrollTop(),
				left: left + $window.scrollLeft()
			});
		},
		open: function(settings) {
			 $content.empty().append(settings.content);

			 $model.css({
			 	width: settings.width || 'auto',
			 	height: settings.height || 'auto'
			 }).appendTo('body');

			 model.center();
			 $(window).on('resize',model.center);
		},
		close: function() {
			$content.empty();
			$model.detach();
			$(window).off('resize',model.center);
		}
	};
		
}());