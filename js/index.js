
$(document).ready(function(){

	var tabData = ['0','0','0','0','0'];    
	var adultsData = ['Adults1','0','0','0','0'];    
	var childData = ['0','0','0','0','0'];
	var hotelData = ['0','0','0','0','0'];
	window.sTab=1;  
	//window.getIdLi=s1;  
	var vala;    
	var valc;  
	var alldata= [];
	var clickLi;
	window.clickLi='STATEROOM 1';
	 var selectHotel=['0','0','0','0','0'];

	$("#totaltab li").hide();
   	$("#totaltab li:first-child").show();
    

$('.add').click(function() {
    	$('.output').html(function(i, val) { 
    if(val<5){var sTab=parseInt(val)+1;
    	window.sTab=sTab;

    	$("#totaltab li:nth-child("+sTab+")").show();
    	return val*1+1
    	} });
	});

	$('.sub').click(function() {
   		$('.output').html(function(i, val) { 
    if (val>1){var sTab=parseInt(val);
    	window.sTab=sTab;
    	var decTab=parseInt(window.sTab) - 1;
		$("#totaltab #s"+decTab).click();
		$('.showError').html();
    	$("#totaltab li:nth-child("+sTab+")").hide();
    	return val*1-1} });
	});

  
$('.hotel').on('click', function(e){
	e.preventDefault();
		var lenOfhotel=window.sTab;

		var getIdHotel=$('.hotel')[0].id;

		
		switch(getIdHotel){
case'hotel1':
			
			 

			if(window.clickLi=='STATEROOM 1'){
				
				if(window.sTab!=1)
				{$("#totaltab #s2").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(0, 1, nameHotel);
	
				console.log(hotelData);
				
				
  
			}
			else if(window.clickLi=='STATEROOM 2'){
				if(window.sTab!=2)
				{$("#totaltab #s3").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(1, 1, nameHotel);
				console.log(hotelData);

				
  
				
			}
			else if(window.clickLi=='STATEROOM 3'){
				if(window.sTab!=3)
				{$("#totaltab #s4").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(2, 1, nameHotel);
				console.log(hotelData);

				
				
			}
			else if(window.clickLi=='STATEROOM 4'){
				if(window.sTab!=4)
				{$("#totaltab #s5").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(3, 1, nameHotel);
				console.log(hotelData);

				
				
			}
			else if(window.clickLi=='STATEROOM 5'){
				if(window.sTab!=5)
				{$("#proceedDiv #proceed").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(4, 1, nameHotel);
				console.log(hotelData);

  
				
			}
			break;
case'hotel2':
			if(window.clickLi=='STATEROOM 1'){
				if(window.sTab!=1)
				{$("#totaltab #s2").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(0, 1, nameHotel);
				alert(hotelData[0]);
				console.log(hotelData);

				
				
			}
			else if(window.clickLi=='STATEROOM 2'){
				if(window.sTab!=2)
				{$("#totaltab #s3").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(1, 1, nameHotel);
				console.log(hotelData);

				
			}
			else if(window.clickLi=='STATEROOM 3'){
				if(window.sTab!=3)
				{$("#totaltab #s4").click();}
			$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(2, 1, nameHotel);
				console.log(hotelData);

				
				
			}
			else if(window.clickLi=='STATEROOM 4'){
				if(window.sTab!=4)
				{$("#totaltab #s5").click();}
			$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(3, 1, nameHotel);
				console.log(hotelData);
				
				
			}
			else if(window.clickLi=='STATEROOM 5'){
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(4, 1, nameHotel);
				console.log(hotelData);

				
			}
			break;
case'hotel3':
			if(window.clickLi=='STATEROOM 1'){
				if(window.sTab!=1)
				{$("#totaltab #s2").click();}
			$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(0, 1, nameHotel);
				// selectHotel.splice(0, 1, nameHotel);
				// $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}
			else if(window.clickLi=='STATEROOM 2'){
				if(window.sTab!=2)
				{$("#totaltab #s3").click();}
			$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(1, 1, nameHotel);
				// selectHotel.splice(1, 1, nameHotel);
				// $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}
			else if(window.clickLi=='STATEROOM 3'){
				if(window.sTab!=3)
				{$("#totaltab #s4").click();}
			$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(2, 1, nameHotel);
				// selectHotel.splice(2, 1, nameHotel);
				// $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}
			else if(window.clickLi=='STATEROOM 4'){
				if(window.sTab!=4)
				{$("#totaltab #s5").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(3, 1, nameHotel);
				// selectHotel.splice(3, 1, nameHotel);
				// $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}
			else if(window.clickLi=='STATEROOM 5'){
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(4, 1, nameHotel);
				// selectHotel.splice(4, 1, nameHotel);
				// $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}

			break;
case'hotel4':
				if(window.clickLi=='STATEROOM 1'){
				if(window.sTab!=1)
				{$("#totaltab #s2").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(0, 1, nameHotel);
				// selectHotel.splice(0, 1, nameHotel);
				// $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}
			else if(window.clickLi=='STATEROOM 2'){
				if(window.sTab!=2)
				{$("#totaltab #s3").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(1, 1, nameHotel);
				// selectHotel.splice(1, 1, nameHotel);
				// $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}
			else if(window.clickLi=='STATEROOM 3'){
				if(window.sTab!=3)
				{$("#totaltab #s4").click();}
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(2, 1, nameHotel);
				// selectHotel.splice(2, 1, nameHotel);
				// $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}
			else if(window.clickLi=='STATEROOM 4'){
				if(window.sTab!=4)
				{$("#totaltab #s5").click();}
			$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(3, 1, nameHotel);
				// selectHotel.splice(3, 1, nameHotel);
				// $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}
			else if(window.clickLi=='STATEROOM 5'){
				$('.showError').html('');
				var nameHotel=$(this).data('hotel-name');
				hotelData.splice(4, 1, nameHotel);
				// selectHotel.splice(4, 1, nameHotel);
				// $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
				console.log(hotelData);
				
			}

			break;
		}

		var indexcount=parseInt(sTab)-1;
		var countTab=window.clickLi.substring(10);
		if((sTab==countTab) &&(window.clickLi=="STATEROOM "+ sTab)){
			  if(hotelData[indexcount]==="hotel1"){

			  $("#hotel1").parent().addClass('hotel-select').removeClass('view-dates');
			  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
			  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
			  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
			  }
			  else if(hotelData[indexcount]==="hotel2"){

			  $("#hotel2").parent().addClass('hotel-select').removeClass('view-dates');
			  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
			  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
			  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
			  }
			  else if(hotelData[indexcount]==="hotel3"){
			 
			  $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
			  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
			  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
			  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
			  }
			  else if(hotelData[indexcount]==="hotel4"){

			  $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
			  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
			  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
			  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
			  }
		}
		$(window).scrollTop(0);
});


$('#totaltab li:nth-child(1)').click(function() {
  window.clickLi= $(this).text();

  if(hotelData[0]==="hotel1"){

  $("#hotel1").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[0]==="hotel2"){

  $("#hotel2").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[0]==="hotel3"){
 
  $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[0]==="hotel4"){

  $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }

});

$('#totaltab li:nth-child(2)').click(function() {
  window.clickLi= $(this).text();
  if(hotelData[1]==="hotel1"){

  $("#hotel1").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[1]==="hotel2"){
 
  $("#hotel2").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[1]==="hotel3"){

  $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[1]==="hotel4"){

  $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }
});

$('#totaltab li:nth-child(3)').click(function() {
  window.clickLi= $(this).text();
  if(hotelData[2]==="hotel1"){
  $("#hotel1").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[2]==="hotel2"){
  $("#hotel2").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[2]==="hotel3"){
  $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[2]==="hotel4"){
  $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }
});

$('#totaltab li:nth-child(4)').click(function() {
  window.clickLi= $(this).text();
  if(hotelData[3]==="hotel1"){
  $("#hotel1").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[3]==="hotel2"){
  $("#hotel2").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[3]==="hotel3"){
  $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[3]==="hotel4"){
  $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }
});

$('#totaltab li:nth-child(5)').click(function() {
  window.clickLi= $(this).text();
  if(hotelData[4]==="hotel1"){
  $("#hotel1").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[4]==="hotel2"){
  $("#hotel2").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[4]==="hotel3"){
  $("#hotel3").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel4").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  }
  else if(hotelData[4]==="hotel4"){
  $("#hotel4").parent().addClass('hotel-select').removeClass('view-dates');
  $("#hotel3").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel2").parent().addClass('view-dates').removeClass('hotel-select');
  $("#hotel1").parent().addClass('view-dates').removeClass('hotel-select');
  }
});


$('.subAdults,.addAdults').on('click', function(e){
		e.preventDefault(); 
	if(window.clickLi=='STATEROOM 1'){
		var dataAdults=$(this).data('adults-name');
		adultsData.splice(0, 1, dataAdults);
		console.log(adultsData);
	}
	else if(window.clickLi=='STATEROOM 2'){
		var dataAdults=$(this).data('adults-name');
		adultsData.splice(1, 1, dataAdults);	
		console.log(adultsData);
	}
	else if(window.clickLi=='STATEROOM 3'){
		var dataAdults=$(this).data('adults-name');
		adultsData.splice(2, 1, dataAdults);	
		console.log(adultsData);
	}
	else if(window.clickLi=='STATEROOM 4'){
		var dataAdults=$(this).data('adults-name');
		adultsData.splice(3, 1, dataAdults);	
		console.log(adultsData);
	}
	else if(window.clickLi=='STATEROOM 5'){
		var dataAdults=$(this).data('adults-name');
		adultsData.splice(4, 1, dataAdults);	
		console.log(adultsData);
	}
	else{console.log("Error");}   
});

$('.subChild,.addChild').on('click', function(e){
		e.preventDefault();
	if(window.clickLi=='STATEROOM 1'){
		var dataChild=$(this).data('child-name');
		childData.splice(0, 1, dataChild);
		console.log(childData);
	}
	else if(window.clickLi=='STATEROOM 2'){
		var dataChild=$(this).data('child-name');
		childData.splice(1, 1, dataChild);	
		console.log(childData);
	}
	else if(window.clickLi=='STATEROOM 3'){
		var dataChild=$(this).data('child-name');
		childData.splice(2, 1, dataChild);	
		console.log(childData);
	}
	else if(window.clickLi=='STATEROOM 4'){
		var dataChild=$(this).data('child-name');
		childData.splice(3, 1, dataChild);	
		console.log(childData);
	}
	else if(window.clickLi=='STATEROOM 5'){
		var dataChild=$(this).data('child-name');
		childData.splice(4, 1, dataChild);	
		console.log(childData);
	}
	else{console.log("Error");}
    // childData.push( $(this).data('child-name') );
    // console.log(childData); 
});

$("#Asub1").click(function() {
   		$(".adults1").html(function(i, vala) { 
    if (vala>1){
    	vala=vala*1-1;
    	window.vala=vala;
    	$('.child1').text(0);
    	return vala}
    });
});
$("#Asub2").click(function() {
   		$(".adults2").html(function(i, vala) { 
    if (vala>1){
    	vala=vala*1-1;
    	window.vala=vala;
    	$('.child2').text(0);
    	return vala}
    });
});
$("#Asub3").click(function() {
   		$(".adults3").html(function(i, vala) { 
    if (vala>1){
    	vala=vala*1-1;
    	window.vala=vala;
    	$('.child3').text(0);
    	return vala}
    });
});
$("#Asub4").click(function() {
   		$(".adults4").html(function(i, vala) { 
    if (vala>1){
    	vala=vala*1-1;
    	window.vala=vala;
    	$('.child4').text(0);
    	return vala}
    });
});
$("#Asub5").click(function() {
   		$(".adults5").html(function(i, vala) { 
    if (vala>1){
    	vala=vala*1-1;
    	window.vala=vala;
    	$('.child5').text(0);
    	return vala}
    });
});


$("#Aadd1").click(function() {
    	$(".adults1").html(function(i, vala) {
    if(vala<4){
    	vala=vala*1+1;
    	window.vala=vala;
    	$('.child1').text(0);
    	return vala};
	});
});
$("#Aadd2").click(function() {
    	$(".adults2").html(function(i, vala) {
    if(vala<4){
    	vala=vala*1+1;
    	window.vala=vala;
    	$('.child2').text(0);
    	return vala};
	});
});
$("#Aadd3").click(function() {
    	$(".adults3").html(function(i, vala) {
    if(vala<4){
    	vala=vala*1+1;
    	window.vala=vala;
    	$('.child3').text(0);
    	return vala};
	});
});
$("#Aadd4").click(function() {
    	$(".adults4").html(function(i, vala) {
    if(vala<4){
    	vala=vala*1+1;
    	window.vala=vala;
    	$('.child4').text(0);
    	return vala};
	});
});
$("#Aadd5").click(function() {
    	$(".adults5").html(function(i, vala) {
    if(vala<4){
    	vala=vala*1+1;
    	window.vala=vala;
    	$('.child5').text(0);
    	return vala};
	});
});

$("#Csub1").click(function() {

   		$(".child1").html(function(i, valc) { 
    if (valc>0){return valc*1-1}
    });
});
$("#Csub2").click(function() {

   		$(".child2").html(function(i, valc) { 
    if (valc>0){return valc*1-1}
    });
});
$("#Csub3").click(function() {

   		$(".child3").html(function(i, valc) { 
    if (valc>0){return valc*1-1}
    });
});
$("#Csub4").click(function() {

   		$(".child4").html(function(i, valc) { 
    if (valc>0){return valc*1-1}
    });
});
$("#Csub5").click(function() {

   		$(".child5").html(function(i, valc) { 
    if (valc>0){return valc*1-1}
    });
});


$("#Cadd1").click(function() {

    	$(".child1").html(function(i, valc) { 
    	var chi=4-window.vala;
    if(valc<chi){return valc*1+1};});
});
$("#Cadd2").click(function() {

    	$(".child2").html(function(i, valc) { 
    	var chi=4-window.vala;
    if(valc<chi){return valc*1+1};});
});
$("#Cadd3").click(function() {

    	$(".child3").html(function(i, valc) { 
    	var chi=4-window.vala;
    if(valc<chi){return valc*1+1};});
});
$("#Cadd4").click(function() {

    	$(".child4").html(function(i, valc) { 
    	var chi=4-window.vala;
    if(valc<chi){return valc*1+1};});
});
$("#Cadd5").click(function() {

    	$(".child5").html(function(i, valc) { 
    	var chi=4-window.vala;
    if(valc<chi){return valc*1+1};});
});

$("#proceedDiv #proceed").click(function(){
	var liOpen=window.clickLi.substring(10);
	for(var i=1;i<=liOpen;i++){
		var index=parseInt(i)-1;
		if(jQuery.inArray("0", hotelData[index]) !== -1){
			$('.showError').html('Please select a cabin category for stateroom ' + i +' from below.');
		}
	}
	
});



}); 

