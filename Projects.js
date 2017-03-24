// Main Javascript file

var b = document.getElementsByTagName("body")[0];

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $('#warm').click(function() {
    $(b).addClass('color-red');
    $(li).addClass('color-red li');
    $(h1).addClass('color-red h1');
    $('#pages').addClass('color-red #pages');
  });

  $('#cool').click(function() {
    $(b).removeClass('color-red');
    $(li).removeClass('color-red li');
    $(h1).removeClass('color-red h1');
    $('#pages').removeClass('color-red #pages');
  })
});
