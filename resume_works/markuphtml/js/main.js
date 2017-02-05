$(function() {
	
	
	//tabs portfolio
	$('#tabs li').click(function(){
	   var thisClass = this.className.slice(0,2);
	   $('div.t1').hide();
	   $('div.t2').hide();
	   $('div.t3').hide();
	   $('div.' + thisClass).fadeIn(500);
	   $('#tabs li').removeClass('active');
	   $(this).addClass('active');
	   return false;
	});
	$('li.t1').click();
	
	// bx slider

    $('.bxslider').bxSlider();
    

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });

    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    
    
    
	

	
	
	
});
