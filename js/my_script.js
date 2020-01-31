$(document).ready(function() {
	
	
	$('#myCarousel').carousel({
		interval: false
	});

	//calendar
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker();

	// slide
	$('#slider').rotateSlider();


	//scrollbar
	$(".blocReservezLeft").niceScroll({

	  // z-index
	  zindex: "auto",

	  // opacity when cursor is inactive
	  cursoropacitymin: 2,

	  // opacity when cursor is active
	  cursoropacitymax: 2,

	  // cursor color
	  cursorcolor: "#b2b7cf",

	  // background
  	  background:"#eceffe",


	  // cursor width
	  cursorwidth: "6px",

	  // cursor border properties
	  cursorborder: "0px solid #fff",
	  cursorborderradius: "0px",

	  // animation speed of smooth scroll
	  scrollspeed: 60,

	  // prevent scrolling on multitouch events
	  preventmultitouchscrolling: true,

	  // force MutationObserver disabled
	  disablemutationobserver:false,

	  preservenativescrolling:true


	}); 






});