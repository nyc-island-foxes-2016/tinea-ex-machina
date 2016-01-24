var DEFAULT_NAV_LINKS = '<a id="login-link" href="/sessions/new">login</a> | <a id="register-link" href="/users/new">register</a> | <a href="/questions/new">Ask a Question</a> | <a href="/questions">Questions</a><form id="login-form" action="/sessions" accept-charset="UTF-8" method="post"><input name="utf8" value="✓" type="hidden"><input name="authenticity_token" value="V7OLg64t3y76lM9baAHhBA8CfdFMq63rb8BtijMxLrc9d+P8QZWC/HKYA7Ej3kZ9rG81Y41tS9Bv20+BSh8OaA==" type="hidden"><fieldset><label for="email">Email</label><input name="email" id="email" placeholder="email@example.com" type="text"><label for="password">Password</label><input name="password" id="password" placeholder="password" type="password"><input name="commit" value="Login" type="submit"></fieldset></form>';

var COMMON_NAV_LINKS = '<a href="/questions/new">Ask a Question</a> | <a href="/questions">Questions</a>';

$(document).ready(function() {
  $('#login-link').on('click', function(event) {
    event.preventDefault();
    $('#login-form').toggle();
  });
  $('#register-link').on('click', function(event) {
    event.preventDefault();
    $('#new_user').toggle();
  });

  $('header').on('submit', 'form', function(event) {
    event.preventDefault();
    $('#login-form').hide();
    var form = this;
    $.ajax({
      url: form.action,
      method: form.method,
      data: $(form).serialize(),
      dataType: 'json'
    }).done(function(response) {
      $('#login-link').remove();
      $('#register-link').remove();
      $('nav').empty();

      $('nav').prepend('<a rel="nofollow" data-method="delete" href="/session">logout</a> | ' + COMMON_NAV_LINKS);
      $('nav').prepend('<a href="/users/' + response.id + '">' + response.username + '</a> | ');
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });
});