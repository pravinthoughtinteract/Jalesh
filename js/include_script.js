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
		auto: true,
		pause: 4000
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
	
	
	
  $('.deck-list ul li a').click(function(){
    $('.deck-list li a').removeClass("actives");
    $(this).addClass("actives");
});	
	
	
  jQuery('.showhiddan1').click(function () {
          $('.cruise-over-result.hiddanbox1').fadeIn();
          $('.cruise-over-result.hiddanbox2').hide();
          $('.cruise-over-result.hiddanbox3').hide();


    		});
    		jQuery('.cross').click( function() { 
    		    $(this).parent().fadeOut();
    		   
    		});
    		jQuery('.showhiddan2').click(function () {


    		    $('.cruise-over-result.hiddanbox2').fadeIn();
    		   $('.cruise-over-result.hiddanbox1').hide();	   		     		   
    		    $('.cruise-over-result.hiddanbox3').hide();
    		  

    		});
    		jQuery('.cross').click(function () {
    		    $(this).parent().fadeOut();

    		});
    		jQuery('.showhiddan3').click(function () {
    		    
    		    $('.hiddanbox3').fadeIn();
    		    $('.hiddanbox1').hide();
    		    $('.hiddanbox2').hide();


    		});	

    		jQuery('.cross').click(function () {
    		    $(this).parent().fadeOut();

    		});
});
	
$(document).ready(function(){

 
  var clickLi;
  window.clickLi='STATEROOM 1';
  var clickLiForm;
  window.clickLiForm='Guest 1';

  var v11 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v12 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v13 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v14 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v21 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v22 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v23 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v24 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v31 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v32 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v33 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v34 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v41 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v42 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v43 = ['0','0','0','0','0','0','0','0','0','0'];    
  var v44 = ['0','0','0','0','0','0','0','0','0','0'];    
  

$('#totalTab li:nth-child(1)').click(function() {
  window.clickLi= $(this).text();

  $('#guest1').click();
});
$('#totalTab li:nth-child(2)').click(function() {
  window.clickLi= $(this).text();
  $('#guest1').click();

});
$('#totalTab li:nth-child(3)').click(function() {
  window.clickLi= $(this).text();
  $('#guest1').click();
});
$('#totalTab li:nth-child(4)').click(function() {
  window.clickLi= $(this).text();
  $('#guest1').click();
});
$('#totalTab li:nth-child(5)').click(function() {
  window.clickLi= $(this).text();
  $('#guest1').click();
});

$('#guest-list li:nth-child(1)').click(function() {
  window.clickLiForm= $(this).text();

        if(window.clickLi=='STATEROOM 1')
          {
            
            if(jQuery.inArray("0", v11) !== -1){
              $("#fname").val(v11[0]);
              $("#lname").val(v11[1]);
              $("#mobile").val(v11[2]);
              $("#email").val(v11[3]);
              $("#Gender").val(v11[4]);
              $("#State").val(v11[5]);
              $("#month").val(v11[6]);
              $("#day").val(v11[7]);
              $("#year").val(v11[8]);
              $("#diningTime").val(v11[9]);
              $("#setTime").val(v11[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 2')
          {
            
            if(jQuery.inArray("0", v21) !== -1){
              $("#fname").val(v21[0]);
              $("#lname").val(v21[1]);
              $("#mobile").val(v21[2]);
              $("#email").val(v21[3]);
              $("#Gender").val(v21[4]);
              $("#State").val(v21[5]);
              $("#month").val(v21[6]);
              $("#day").val(v21[7]);
              $("#year").val(v21[8]);
              $("#diningTime").val(v21[9]);
              $("#setTime").val(v21[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 3')
          {
            
            if(jQuery.inArray("0", v31) !== -1){
              $("#fname").val(v31[0]);
              $("#lname").val(v31[1]);
              $("#mobile").val(v31[2]);
              $("#email").val(v31[3]);
              $("#Gender").val(v31[4]);
              $("#State").val(v31[5]);
              $("#month").val(v31[6]);
              $("#day").val(v31[7]);
              $("#year").val(v31[8]);
              $("#diningTime").val(v31[9]);
              $("#setTime").val(v31[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 4')
          {
            
            if(jQuery.inArray("0", v41) !== -1){
              $("#fname").val(v41[0]);
              $("#lname").val(v41[1]);
              $("#mobile").val(v41[2]);
              $("#email").val(v41[3]);
              $("#Gender").val(v41[4]);
              $("#State").val(v41[5]);
              $("#month").val(v41[6]);
              $("#day").val(v41[7]);
              $("#year").val(v41[8]);
              $("#diningTime").val(v41[9]);
              $("#setTime").val(v41[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }


});
$('#guest-list li:nth-child(2)').click(function() {
  window.clickLiForm= $(this).text();


        if(window.clickLi=='STATEROOM 1')
          {
            
            if(jQuery.inArray("0", v12) !== -1){
              $("#fname").val(v12[0]);
              $("#lname").val(v12[1]);
              $("#mobile").val(v12[2]);
              $("#email").val(v12[3]);
              $("#Gender").val(v12[4]);
              $("#State").val(v12[5]);
              $("#month").val(v12[6]);
              $("#day").val(v12[7]);
              $("#year").val(v12[8]);
              $("#diningTime").val(v12[9]);
              $("#setTime").val(v12[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 2')
          {
            
            if(jQuery.inArray("0", v22) !== -1){
              $("#fname").val(v22[0]);
              $("#lname").val(v22[1]);
              $("#mobile").val(v22[2]);
              $("#email").val(v22[3]);
              $("#Gender").val(v22[4]);
              $("#State").val(v22[5]);
              $("#month").val(v22[6]);
              $("#day").val(v22[7]);
              $("#year").val(v22[8]);
              $("#diningTime").val(v22[9]);
              $("#setTime").val(v22[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 3')
          {
            
            if(jQuery.inArray("0", v32) !== -1){
              $("#fname").val(v32[0]);
              $("#lname").val(v32[1]);
              $("#mobile").val(v32[2]);
              $("#email").val(v32[3]);
              $("#Gender").val(v32[4]);
              $("#State").val(v32[5]);
              $("#month").val(v32[6]);
              $("#day").val(v32[7]);
              $("#year").val(v32[8]);
              $("#diningTime").val(v32[9]);
              $("#setTime").val(v32[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 4')
          {
            
            if(jQuery.inArray("0", v42) !== -1){
              $("#fname").val(v42[0]);
              $("#lname").val(v42[1]);
              $("#mobile").val(v42[2]);
              $("#email").val(v42[3]);
              $("#Gender").val(v42[4]);
              $("#State").val(v42[5]);
              $("#month").val(v42[6]);
              $("#day").val(v42[7]);
              $("#year").val(v42[8]);
              $("#diningTime").val(v42[9]);
              $("#setTime").val(v42[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }

});
$('#guest-list li:nth-child(3)').click(function() {
  window.clickLiForm= $(this).text();
if(window.clickLi=='STATEROOM 1')
          {
            
            if(jQuery.inArray("0", v13) !== -1){
              $("#fname").val(v13[0]);
              $("#lname").val(v13[1]);
              $("#mobile").val(v13[2]);
              $("#email").val(v13[3]);
              $("#Gender").val(v13[4]);
              $("#State").val(v13[5]);
              $("#month").val(v13[6]);
              $("#day").val(v13[7]);
              $("#year").val(v13[8]);
              $("#diningTime").val(v13[9]);
              $("#setTime").val(v13[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 2')
          {
            
            if(jQuery.inArray("0", v23) !== -1){
              $("#fname").val(v23[0]);
              $("#lname").val(v23[1]);
              $("#mobile").val(v23[2]);
              $("#email").val(v23[3]);
              $("#Gender").val(v23[4]);
              $("#State").val(v23[5]);
              $("#month").val(v23[6]);
              $("#day").val(v23[7]);
              $("#year").val(v23[8]);
              $("#diningTime").val(v23[9]);
              $("#setTime").val(v23[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 3')
          {
            
            if(jQuery.inArray("0", v33) !== -1){
              $("#fname").val(v33[0]);
              $("#lname").val(v33[1]);
              $("#mobile").val(v33[2]);
              $("#email").val(v33[3]);
              $("#Gender").val(v33[4]);
              $("#State").val(v33[5]);
              $("#month").val(v33[6]);
              $("#day").val(v33[7]);
              $("#year").val(v33[8]);
              $("#diningTime").val(v33[9]);
              $("#setTime").val(v33[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 4')
          {
            
            if(jQuery.inArray("0", v43) !== -1){
              $("#fname").val(v43[0]);
              $("#lname").val(v43[1]);
              $("#mobile").val(v43[2]);
              $("#email").val(v43[3]);
              $("#Gender").val(v43[4]);
              $("#State").val(v43[5]);
              $("#month").val(v43[6]);
              $("#day").val(v43[7]);
              $("#year").val(v43[8]);
              $("#diningTime").val(v43[9]);
              $("#setTime").val(v43[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }



});
$('#guest-list li:nth-child(4)').click(function() {
  window.clickLiForm= $(this).text();

  if(window.clickLi=='STATEROOM 1')
          {
            
            if(jQuery.inArray("0", v14) !== -1){
              $("#fname").val(v14[0]);
              $("#lname").val(v14[1]);
              $("#mobile").val(v14[2]);
              $("#email").val(v14[3]);
              $("#Gender").val(v14[4]);
              $("#State").val(v14[5]);
              $("#month").val(v14[6]);
              $("#day").val(v14[7]);
              $("#year").val(v14[8]);
              $("#diningTime").val(v14[9]);
              $("#setTime").val(v14[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 2')
          {
            
            if(jQuery.inArray("0", v24) !== -1){
              $("#fname").val(v24[0]);
              $("#lname").val(v24[1]);
              $("#mobile").val(v24[2]);
              $("#email").val(v24[3]);
              $("#Gender").val(v24[4]);
              $("#State").val(v24[5]);
              $("#month").val(v24[6]);
              $("#day").val(v24[7]);
              $("#year").val(v24[8]);
              $("#diningTime").val(v24[9]);
              $("#setTime").val(v24[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 3')
          {
            
            if(jQuery.inArray("0", v34) !== -1){
              $("#fname").val(v34[0]);
              $("#lname").val(v34[1]);
              $("#mobile").val(v34[2]);
              $("#email").val(v34[3]);
              $("#Gender").val(v34[4]);
              $("#State").val(v34[5]);
              $("#month").val(v34[6]);
              $("#day").val(v34[7]);
              $("#year").val(v34[8]);
              $("#diningTime").val(v34[9]);
              $("#setTime").val(v34[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }
          if(window.clickLi=='STATEROOM 4')
          {
            
            if(jQuery.inArray("0", v44) !== -1){
              $("#fname").val(v44[0]);
              $("#lname").val(v44[1]);
              $("#mobile").val(v44[2]);
              $("#email").val(v44[3]);
              $("#Gender").val(v44[4]);
              $("#State").val(v44[5]);
              $("#month").val(v44[6]);
              $("#day").val(v44[7]);
              $("#year").val(v44[8]);
              $("#diningTime").val(v44[9]);
              $("#setTime").val(v44[10]);
            }
            else{
              $("#fname").val('');
              $("#lname").val('');
              $("#mobile").val('');
              $("#email").val('');
              $("#Gender").val('');
              $("#State").val('');
              $("#month").val('');
              $("#day").val('');
              $("#year").val('');
              $("#diningTime").val('');
              $("#setTime").val('');
            }
          }


});

$("#myform").on('click','#continue',function() {

    if(window.clickLi=="STATEROOM 1")
    {
      if(window.clickLiForm=="Guest 1")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v11.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v11.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v11.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v11.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v11.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v11.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v11.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v11.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v11.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v11.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v11.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v11) !== -1){
            $('#guest2').click();
          }
            

            
          
          console.log(v11);
        }

      else if(window.clickLiForm=="Guest 2")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v12.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v12.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v12.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v12.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v12.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v12.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v12.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v12.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v12.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v12.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v12.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v12) !== -1){
            $('#guest3').click();
            }

            
          
          console.log(v12);
        }

      else if(window.clickLiForm=="Guest 3")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v13.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v13.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v13.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v13.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v13.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v13.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v13.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v13.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v13.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v13.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v13.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v13) !== -1){
            $('#guest4').click();
            }

            
          
          console.log(v13);
        }

      else if(window.clickLiForm=="Guest 4")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v14.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v14.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v14.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v14.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v14.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v14.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v14.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v14.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v14.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v14.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v14.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

if(jQuery.inArray("0", v14) !== -1){
            $('#S2').click();
            }

            
          
          console.log(v14);
        }


      }
    if(window.clickLi=="STATEROOM 2")
    {
      if(window.clickLiForm=="Guest 1")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v21.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v21.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v21.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v21.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v21.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v21.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v21.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v21.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v21.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v21.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v21.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v21) !== -1){
            $('#guest2').click();
            }

            
          
          console.log(v21);
        }

      else if(window.clickLiForm=="Guest 2")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v22.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v22.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v22.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v22.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v22.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v22.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v22.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v22.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v22.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v22.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v22.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v22) !== -1){
            $('#guest3').click();
            }

            
          
          console.log(v22);
        }

      else if(window.clickLiForm=="Guest 3")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v23.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v23.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v23.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v23.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v23.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v23.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v23.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v23.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v23.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v23.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v23.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v23) !== -1){
            $('#guest3').click();
            }

            
          
          console.log(v23);
        }

      else if(window.clickLiForm=="Guest 4")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v24.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v24.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v24.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v24.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v24.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v24.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v24.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v24.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v24.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v24.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v24.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v24) !== -1){
            $('#S3').click();
            }

            
          
          console.log(v24);
        }


      }
    if(window.clickLi=="STATEROOM 3")
    {
      if(window.clickLiForm=="Guest 1")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v31.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v31.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v31.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v31.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v31.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v31.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v31.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v31.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v31.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v31.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v31.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v31) !== -1){
            $('#guest2').click();
            }

            
          
          console.log(v31);
        }

      else if(window.clickLiForm=="Guest 2")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v32.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v32.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v32.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v32.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v32.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v32.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v32.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v32.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v32.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v32.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v32.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v32) !== -1){
            $('#guest3').click();
            }

            
          
          console.log(v32);
        }

      else if(window.clickLiForm=="Guest 3")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v33.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v33.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v33.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v33.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v33.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v33.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v33.splice(6, 1, month);
            }else{
              $('.showError7').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v33.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v33.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v33.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v33.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v33) !== -1){
            $('#guest4').click();
            }

            
          
          console.log(v33);
        }

      else if(window.clickLiForm=="Guest 4")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v34.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v34.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v34.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v34.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v34.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v34.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v34.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v34.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v34.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v34.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v34.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v34) !== -1){
            $('#S4').click();
            }

            
          
          console.log(v34);
        }


      }
    if(window.clickLi=="STATEROOM 4")
    {
      if(window.clickLiForm=="Guest 1")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v41.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v41.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v41.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v41.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v41.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v41.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v41.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v41.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v41.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v41.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v41.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v41) !== -1){
            $('#guest2').click();
            }

            
          
          console.log(v41);
        }

      else if(window.clickLiForm=="Guest 2")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v42.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v42.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v42.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v42.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v42.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v42.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v42.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v42.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v42.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v42.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v42.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }
            if(jQuery.inArray("0", v42) !== -1){
            $('#guest3').click();
            }

            
          
          console.log(v42);
        }

      else if(window.clickLiForm=="Guest 3")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v43.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v43.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v43.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v43.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v43.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v43.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v43.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v43.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v43.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v43.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v43.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v43) !== -1){
            $('#guest3').click();
            }

            
          
          console.log(v43);
        }

      else if(window.clickLiForm=="Guest 4")
      {

              
              var nameregexp = /[^a-zA-Z]/g;
              var number=/[^0-9]/g;
              var mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

              var fname=$("#fname").val();
              if((fname!=="") & (fname.match(nameregexp))){
              v44.splice(0, 1, fname);
            }else{
              $('.showError1').html('This field is required');
            }
            
            var lname=$("#lname").val();
              if((lname!=="") & (fname.match(nameregexp))){
              v44.splice(1, 1, lname);
            }else{
              $('.showError2').html('This field is required');
            }
            
            var mobile=$("#mobile").val();
              if(mobile!=="" & (fname.match(number))){
              v44.splice(2, 1, mobile);
            }else{
              $('.showError3').html('This field is required');
            }

            var email=$("#email").val();
              if(email!=="" & (fname.match(mail))){
              v44.splice(3, 1, email);
            }else{
              $('.showError4').html('This field is required');
            }
          
          var Gender=$("#Gender").val();
              if(Gender!==""){
              v44.splice(4, 1, Gender);
            }else{
              $('.showError5').html('This field is required');
            }

            var State=$("#State").val();
              if(State!=="0"){
              v44.splice(5, 1, State);
            }else{
              $('.showError6').html('This field is required');
            }
           
              var month=$("#month").val();
              if(month!=="MM"){
              v44.splice(6, 1, month);
            }else{
              $('.showError9').html('This field is required');
            }

              var day=$("#day").val();
              if(day!=="DD"){
              v44.splice(7, 1, day);
            }else{
              $('.showError9').html('This field is required');
            }

              var State=$("#year").val();
              if(State!=="YYYY"){
              v44.splice(8, 1, State);
            }else{
              $('.showError9').html('This field is required');
            }

              var diningTime=$("#diningTime").val();
              if(diningTime!=="0"){
              v44.splice(9, 1, diningTime);
            }else{
              $('.showError10').html('This field is required');
            }

              var setTime=$("#setTime").val();
              if(setTime!=="0"){
              v44.splice(10, 1, setTime);
            }else{
              $('.showError11').html('This field is required');
            }

            if(jQuery.inArray("0", v44) !== -1){
            $('#guest3').click();
            }

            
          
          console.log(v44);
        }


      }

    //}
});

});

