$(document).ready(function() {
  $('a[href="/sessions"]').on('click', function(event) {
    event.preventDefault();
    $.ajax( {
      url: '/sessions/new'
    }).done(function(response) {
      $('a[href="/sessions"]').hide();
      $('header').append(response);
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });

});