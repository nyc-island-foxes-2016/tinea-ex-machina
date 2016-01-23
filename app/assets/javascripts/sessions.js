$(document).ready(function() {
  $('#login-form').hide();

  $('#login-link').on('click', function(event) {
    event.preventDefault();
    var loginLink = this;
    $.ajax( {
      url: '/sessions/new'
    }).done(function(response) {
      $('#login-form').toggle();
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });
});