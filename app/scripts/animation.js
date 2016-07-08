var $window           = $(window);
var win_height_padded = $window.height() * 1.1;
var isTouch           = Modernizr.touch;

$window.on('scroll', animateOnScroll);

function animateOnScroll() {
  var scrolled = $window.scrollTop();
  $('.animated-scroll:not(.animated)').each(function () {
    var $this     = $(this);
    var offsetTop = $this.offset().top;

    if (scrolled + win_height_padded > offsetTop) {
      if ($this.data('timeout')) {
        window.setTimeout(function(){
          $this.addClass('animated ' + $this.data('animation'));
        },
        parseInt($this.data('timeout'),10));
      } else {
        $this.addClass('animated ' + $this.data('animation'));
      }
    }
  });
};
