$('.add').click(function() {
  $(this).prev().val(+$(this).prev().val() + 1);
});

$('.sub').click(function() {
  if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});

var total = 0;
$(".txtBox").keyup(function() {
  $(".txtBox").each(function() {
    var txtBoxVal = $(this).val();
    total = total + Number(txtBoxVal);
  });
  $(".total").val(total);
  total = 0;
});