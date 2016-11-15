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
});


 
$(document).ready(function(){
				// Плавный скролл по якорям
	$('a[href^="#"]').click(function () { 
	    elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		if($.browser.safari){
		$('body').animate( { scrollTop: destination }, 1000 );
		} else {
	    	$('html').animate( { scrollTop: destination }, 1000 );
		}
		return false;
		 });
});

 





$(document).ready(function(){
$('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});
});