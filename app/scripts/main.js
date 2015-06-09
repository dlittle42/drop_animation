var events        = {}
events.startEvent = Modernizr.touch ? 'touchstart' : 'click';
events.endEvent   = Modernizr.touch ? 'touchend' : 'mouseup';
events.moveEvents = Modernizr.touch ? 'touchmove' : 'mousemove';

$(function() {

	//setup touche
	//$('.bloop-inner').on('click', handleClicks);
	FastClick.attach(document.body);


	$("#reveal_btn").click(function() {

	  $( ".bloop" ).addClass( "on-screen" );
	});

	$("#remove_btn").click(function() {

	  $( ".bloop" ).removeClass("on-screen");
	});


	 $( ".bloop" ).hover( handlerIn, handlerOut );

	  function handlerIn(){
	  	bounceUp(this);
	  }

	  function handlerOut(){
	  	bounceDown(this);
	 
	  }

	  function bounceUp(bloop){
	  	var inner = $(bloop).find('.bloop-inner');
	  	var ring = $(bloop).find('.bloop-ring');
	  	var bounce = new Bounce();
		bounce.scale({
		  from: { x: 0.9, y: 0.9 },
  		  to: { x: 1.3, y: 1.3 },
		  easing: "bounce",
		  bounces: 6,
    	  duration: 1000
		});
		bounce.applyTo($(inner));
		$(ring).addClass('disappear');
	  }

	  function bounceDown(bloop){
	  	console.log("out");
	  	var inner = $(bloop).find('.bloop-inner');
	  	var ring = $(bloop).find('.bloop-ring');
	  	var bounce = new Bounce();
		bounce.scale({
		  from: { x: 1.3, y: 1.3 },
  		  to: { x: 1, y: 1 },
		  easing: "bounce",
		  bounces: 6,
    	  duration: 1000
		});
		bounce.applyTo($(inner));
		$(ring).removeClass('disappear');
	  }
/*

	  $(document).on('touchstart click', '.bloop', function(event){
       // event.stopPropagation();
      //  event.preventDefault();
        if(event.handled !== true) {

            // Do your magic here.
          //  $(this).addClass('clicktouch');
            	var inner = $(this).find('.bloop-inner');
		  	var ring = $(this).find('.bloop-ring');
		  	var bounce = new Bounce();
			bounce.scale({
			  from: { x: 0.9, y: 0.9 },
	  		  to: { x: 1.3, y: 1.3 },
			  easing: "bounce",
			  bounces: 6,
	    	  duration: 1000
			});
			bounce.applyTo($(inner));

	  		console.log('click');

            event.handled = true;
        } else {
            return false;
        }
	});
	*/

});