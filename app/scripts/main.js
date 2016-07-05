/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
$('.nav-main .toggler').on('click', function(e) {
	$('.nav-main .toggler > span').toggleClass('hidden-xs-up');
  e.preventDefault();
});

$('.nav-main ul li a').not('.nav-main .toggler').on('click', function() {
  // this needs to explicitly remove and add (rather than toggle)
  // so that a click on .home doesn't change .icon to fa-close
  // $('.nav-main ul > li > a.toggle > span').removeClass('fa-close').addClass('fa-bars');
  $('.nav-main .toggler .icon-hamburger').removeClass('hidden-xs-up');
  $('.nav-main .toggler .icon-close').addClass('hidden-xs-up');
});
