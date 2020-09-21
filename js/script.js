
jQuery(document).ready(function($) {
	


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(".tel").on('keydown',function(event) {
  
   return (event.key >= '0' && event.key <= '9') || event.key == '+' || 
  event.key == '(' || event.key == ')' || event.key == '-' ||
    event.key == 'ArrowLeft' || event.key == 'ArrowRight' 
    || event.key == 'Delete' || event.key == 'Backspace';
    
})


  function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#blabla').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]); 
  }
}

$("#imgInp").change(function() {
  readURL(this);
});

});