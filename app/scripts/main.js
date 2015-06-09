console.log('\'Allo \'Allo!');

$(function() {


	$("#reveal_btn").click(function() {

	  $( ".bloop" ).addClass( "on-screen" );
	});

	$("#remove_btn").click(function() {

	  $( ".bloop" ).removeClass("on-screen");
	});

});