// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*
 Flexslider setup. Check this link to see all of its properties.
 https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
 */
$(window).load(function(){
	$('.flexslider').flexslider({
		animation: 'fade',
		animationSpeed: 3000,
		touch: true,
		controlNav: false,
		directionNav: false,
        start: function(slider){
			$('body').removeClass('loading');
		}
	});
});