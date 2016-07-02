/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
$('.nav-main a.toggle').on('click', function(e) {
	$('.nav-main nav').toggleClass('expanded');
	$('.nav-main a.toggle > span').toggleClass('hidden');
  e.preventDefault();
});

$('.nav-main ul li a').not('.nav-main a.toggle').on('click', function() {
	$('.nav-main nav').removeClass('expanded');
  // this needs to explicitly remove and add (rather than toggle)
  // so that a click on .home doesn't change .icon to fa-close
  // $('.nav-main ul > li > a.toggle > span').removeClass('fa-close').addClass('fa-bars');
  $('.nav-main a.toggle > span.icon-hamburger').removeClass('hidden');
  $('.nav-main a.toggle > span.icon-close').addClass('hidden');
});
