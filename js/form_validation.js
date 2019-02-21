$(document).ready(function(){
    
	$('#totaltab li:nth-child(1)').click(function() {
		alert("hi");
  window.clickLiForm= $(this).text();
  console.log(clickLiForm);
  });
	});