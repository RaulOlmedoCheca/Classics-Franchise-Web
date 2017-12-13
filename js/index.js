$(document).ready(function () {
  $('.target').pushpin();
  $('.parallax').parallax();
});

$('.pushpin-demo-nav').each(function () {
  var $this = $(this);
  var $target = $('#' + $(this).attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height()
  });
});

// Get the project instance (for curiosity purposes)
var instance = M.Parallax.getInstance(elem);