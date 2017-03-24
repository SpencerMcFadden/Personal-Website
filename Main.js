// Main Javascript file

var b = document.getElementsByTagName("body")[0];

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $("#warm").click(function() {
    console.log("Clicked!");
    $(b).addClass('color-red');
  });

  $("#cool").click(function() {
    console.log("Clicked!");
    $(b).removeClass('color-red');
  })
});
