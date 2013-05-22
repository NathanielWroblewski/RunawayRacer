var stef = 2;

$(document).ready(function() {
  $(document).on('keyup', function(e) {
    if (e.keyCode == 80) {
      if (stef < 5) {
        stef += 1;
        $('#stef').appendTo($('#impress').find("div:nth-child("+stef+")"));
      }
    }
    if ($('#finishline').hasClass('active')) {
      $("<img id='splat' src='img/splat.png'>").appendTo('#car');
    }
  });
});