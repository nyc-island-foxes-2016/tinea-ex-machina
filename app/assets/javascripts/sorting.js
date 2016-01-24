$(document).ready(function() {
  $("#voted-filter").on('click', function(event) {
    $.ajax({
      url: '/questions',
    }).done(function(response) {
      $('body ol').html(response);
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });
});
