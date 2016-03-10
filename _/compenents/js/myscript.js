$(function(){
	
	//highlight the current nav
	$("#home:a contains('Home')").parent().addClass('active');
	$("#about:a contains('About')").parent().addClass('active');
	$("#artists:a contains('Artists')").parent().addClass('active');
	$("#privacypolicy:a contains('Privacy Policy')").parent().addClass('active');
	$("#register:a contains('Register')").parent().addClass('active');
	$("#schedule:a contains('Schedule')").parent().addClass('active');
	$("#venuetravel:a contains('Venue/Travel')").parent().addClass('active');
	//make menu drop automatically
	$('ul.nav il.dropdown').hover(function(){
		$('.dropdown-menu', this).fadeIn();
	}, function(){
		$('.dropdown-menu', this).fadeOut(fast);
	});//hover
}); //jquery is loaded