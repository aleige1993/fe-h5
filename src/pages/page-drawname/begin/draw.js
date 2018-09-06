(function ($) {

  $.fn.draw = function (options) {

    function Plugin(element, options) {
      var plugin = this;
      plugin.element = element;
      plugin.options = $.extend({}, $.fn.draw.defaults, options);
      plugin.draw = {
        container: $('ul', plugin.element),
        element: $('li', plugin.element).removeAttr('class'),
        animate: function (speed) {
          clearInterval(timer);
          timer = setInterval(function () {
            var $drawList = $(plugin.draw.element);
            var length = plugin.options.length || $drawList.length;
            var loopMaxCircle = plugin.options.loopMaxCircle;

            if (listIndex > length) {
              listIndex = 1;
              loopCircle++;
            }
            var $drawCell = $('li[data-index="' + listIndex + '"]', plugin.draw.container);
            $drawCell
              .addClass('active')
              .siblings('li')
              .removeClass('active');

            if (loopCircle == 1 && listIndex > 4)
              plugin.draw.animate(plugin.options.speed.fast);
            if (loopCircle >= loopMaxCircle) {
              plugin.draw.animate(plugin.options.speed.slow);
              if (looped && prizeIndex == listIndex) {
                clearInterval(timer);
                plugin.options.callback();
                // if (plugin.options.noresult) {
                // 	$drawCell
                // 		.removeClass('active')
                // 		.addClass('noresult');
                // } else {
                // 	plugin.options.callback();
                // }
              }
              looped = true;
            }

            listIndex++;
          }, speed);
        }
      };
      plugin.init = function () {
//				listIndex = 1;
//				loopCircle = 1;
//				looped = false,
        prizeIndex = plugin.options.prizeIndex;
        plugin.draw.animate(plugin.options.speed.slow);

      }
    }

    $.fn.draw.defaults = {
      speed: {slow: 400, fast: 100},
      length: 18,
      loopMaxCircle: 5,
      callback: function (plugin) {
      }
    };

    var timer = function () {
      },
      listIndex = 1,
      loopCircle = 1,
      looped = false,
      prizeIndex = null,
      prizeData = null;

    $.each(this, function () {
      var plugin = new Plugin(this, options);
      plugin.init();
    });

  }

})(jQuery);
