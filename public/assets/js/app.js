$(document).ready(function(){
  $('.carousel').carousel();

  $(".sidebar__toggle").on("click", function(){
    $("body").toggleClass("no-sidebar");
  });

  $('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).show();
    $('.dropdown-menu-child').hide();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).hide();
	});

	$('.dropdown.dropdown-child').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).show();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).hide();
	});
  
});