include1('jquery.fancybox.css');
include4('meanmenu.css');
include2('jquery.fancybox.pack.js');
include2('finezoom.js');
include3('jquery.meanmenu.js');
include3('jquery.singlePageNav.js');
function include2(url2){ 
  document.write('<script type="text/javascript" src="fancybox/'+ url2 + '"></script>'); 
  return false ;
}
function include1(url2){ 
  document.write('<link href="fancybox/'+ url2 + '" rel="stylesheet" type="text/css" media="screen">'); 
  return false ;
}
function include3(url3){ 
  document.write('<script type="text/javascript" src="js/'+ url3 + '"></script>'); 
  return false ;
}
function include4(url2){ 
  document.write('<link href="css/'+ url2 + '" rel="stylesheet" type="text/css">'); 
  return false ;
}


$(document).ready(function($) {
 

	$(".fancybox-img").fancybox();
	$(".zoomimage a").fancybox({
					mouseWheel : false,
					afterShow:function(){
						console.log( $('.fancybox-image').height() );
						$('.fancybox-image').finezoom({
							max_zoom:6
						});
					}
});



$("a.fancyenquiry").fancybox({

                openEffect: 'elastic',

                closeEffect: 'elastic',

                prevEffect: 'fade',

                nextEffect: 'fade',

                'fitToView': true, 

                maxWidth: "90%",

				'height': 605,

                type: 'iframe',

               

                iframe: {

                    preload: false

                }});		



$(".enquiry").fancybox({
            maxWidth    : 500,
            maxHeight   : 350,
            fitToView   : false,
            width       : '90%',
            height      : '90%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
	        	type: "iframe",
        });	
		$(".enquir_pop").fancybox({
            maxWidth    : 500,
            maxHeight   : 400,
            fitToView   : false,
            width       : '90%',
            height      : '90%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
	        	type: "iframe",
        });
		
        $(".brochure").fancybox({
            maxWidth    : 500,
            maxHeight   : 340,
            fitToView   : false,
            width       : '70%',
            height      : '70%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
		        type: "iframe",
        });	
	
	$(".disclaimer").fancybox({
            maxWidth    : 600,
            maxHeight   : 340,
            fitToView   : false,
            width       : '70%',
            height      : '70%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'none',
            closeEffect : 'none',
		        type: "iframe",
        });


$('.bro').fancybox({
   openEffect: 'elastic',
    closeEffect: 'elastic',
    prevEffect: 'fade',
    nextEffect: 'fade',
    fitToView: false, // 
    maxWidth: "90%", //
		width     : 500,
		height    : 400,
    type: 'iframe',
    scrolling: 'no',
    iframe: {
        preload: false
    }
  });

$(document).ready(function () {	
	$(window).bind("scroll", function () {
        if ($(this).scrollTop() > 120) {
			$(".uparrow").fadeIn();
        } else {
			$(".uparrow").fadeOut();
        }
		
});

 });
 
 
 
 
 
 

$('.navi-getion header nav').meanmenu();
$(".meanclose").click(function(){alert();
  if ($(".top-sun-nav").hasClass("expanded")) {
      $(".top-sun-nav").removeClass("expanded");            
  } else {
      $(".top-sun-nav").addClass("expanded");            
  }
});
 $(".navi-getion nav ul li").hover(function(){
			  menu=$(this);menu.children("a").addClass("highlight");		
			  menu.children("ul.maind").css('display','none');
			 menu.children("ul.maind").stop(false,true).fadeIn("fast");},
			 function(){
			 menu=$(this);
			  menu.children("a").removeClass("highlight");
			 menu.children("ul.maind").fadeOut("fast");
	 		 });	
	
	$('.bxslider').bxSlider({
		pager: false,
		controls: true,
		mode:"fade",hideControlOnEnd:true,
		auto: false,
  });
  
  $('.banner11').bxSlider({
		pager: false,
		controls: true,
		auto: true,
		infiniteLoop: true
  });
    $('.decks-gallery').bxSlider({
		pager: false,
		controls: true,
		auto: false,
		slideWidth: 606,
		slideHeight: 368
  });
  

  
  
  
	$('.bxslider-inner').bxSlider({
		pager: false,
		controls: true,
		mode:"fade",
		auto: false,
  });
  $('.plan-holiday-slider').bxSlider({
		pager: false,
		controls: true,
		mode:"fade",
		auto: false,
  });
  
	$('.corporate-partie-slider').bxSlider({
		pager: false,
		controls: true,
		mode:"fade",
		auto: false,
  });
  

$(window).bind('load', function () {

$('.bxflcarousel1').bxSlider({
				minSlides: 4,
				maxSlides: 4,
				controls: true,
		infiniteLoop: false,
		hideControlOnEnd:true,
				pager: false,
				slideWidth: 358,
				useCSS: false,
				slideMargin: 0
			  });	
			  
			
			  
			
	if ($(window).width() < 960) {
				
			  $('.bxflcarousel1').bxSlider({
				minSlides: 1,
				maxSlides: 1,
				controls: true,
		infiniteLoop: false,
		hideControlOnEnd:true,
				pager: false,
				slideWidth: 358,
				useCSS: false,
				slideMargin: 30
			  });
			  
			 
			  
			  }
			  else {
				
			  $('.bxflcarousel1').bxSlider({
				minSlides: 4,
				maxSlides: 4,
				controls: true,
		infiniteLoop: false,
		hideControlOnEnd:true,
				pager: false,
				slideWidth: 358,
				useCSS: false,
				slideMargin: 30
			  });
			  
			  
		  }


 });
		
		
		
		
		
	

$(".subnavigation ul li a").click(function () {
                            $(".subnavigation ul li a").not(this).removeClass("a-act");
                            $(this).addClass("a-act");
        });
   $(window).on('scroll load', function() {
         if ($(window).scrollTop() > 0) {
			 $('.navi-getion').addClass('scrolled');
			 $('.subnavigation').addClass('scrolled');
			 
         }
         else {
			 $('.navi-getion').removeClass('scrolled');
			 $('.subnavigation').removeClass('scrolled');
             
         }
    });



    
	
	
	
// Login poupup modal js Start		
	
	$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

	$('a[data-modal-id]').click(function(e) {
		e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
		var modalBox = $(this).attr('data-modal-id');
		$('#'+modalBox).fadeIn($(this).data());
	});  
  
  
$(".js-modal-close, .modal-overlay").click(function() {
    $(".modal-box, .modal-overlay").fadeOut(500, function() {
        $(".modal-overlay").remove();
    });
 
});
 
$(window).resize(function() {
    $(".modal-box").css({
        top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
        left: ($(window).width() - $(".modal-box").outerWidth()) / 2
    });
});
 
$(window).resize();
 
});



$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tabs a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});


// Login poupup modal js End
	
	
	
	
	
	
  
  
	
		});
		
		
		

