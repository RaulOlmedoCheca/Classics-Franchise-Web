$(document).ready(function () {
  $('.target').pushpin();
});
var elem = document.querySelector('.parallax');
var instance1 = new M.Parallax(elem, options);
var elem = document.querySelector('.scrollspy');
var instance2 = new M.ScrollSpy(elem, options);

$('.pushpin-demo-nav').each(function () {
  var $this = $(this);
  var $target = $('#' + $(this).attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height()
  });
});

// Get the project instance (for curiosity purposes)
// var instance1 = M.Parallax.getInstance(elem);
// var instance2 = M.ScrollSpy.getInstance(elem);