var DEFAULT_NAV_LINKS = '<a id="login-link" href="/sessions/new">login</a> | <a id="register-link" href="/users/new">register</a> | <a href="/questions/new">Ask a Question</a> | <a href="/questions">Questions</a><form id="login-form" action="/sessions" accept-charset="UTF-8" method="post"><input name="utf8" value="✓" type="hidden"><input name="authenticity_token" value="V7OLg64t3y76lM9baAHhBA8CfdFMq63rb8BtijMxLrc9d+P8QZWC/HKYA7Ej3kZ9rG81Y41tS9Bv20+BSh8OaA==" type="hidden"><fieldset><label for="email">Email</label><input name="email" id="email" placeholder="email@example.com" type="text"><label for="password">Password</label><input name="password" id="password" placeholder="password" type="password"><input name="commit" value="Login" type="submit"></fieldset></form>';

var COMMON_NAV_LINKS = '<a href="/questions/new">Ask a Question</a> | <a href="/questions">Questions</a>';

var drawMoth = function(){
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');

  // body colors
  context.fillStyle = '#542';
  context.strokeStyle = '#222';
  context.lineWidth = 2;

  // body
  context.beginPath();
  context.moveTo(30, 30);
  context.quadraticCurveTo(60, 20, 70, 70);
  context.quadraticCurveTo(20, 60, 30, 30);
  context.closePath();
  context.fill();
  context.stroke();

  // right antenna
  context.beginPath();
  context.moveTo(40, 35);
  context.quadraticCurveTo(30, 20, 35, 5);
  context.stroke();

  // left antenna
  context.beginPath();
  context.moveTo(35, 40);
  context.quadraticCurveTo(20, 30, 5, 35);
  context.stroke();

  // wing colors
  context.fillStyle = '#EDA';
  context.strokeStyle = '#FEB';

  // front right wing
  context.beginPath();
  context.moveTo(48, 38);
  context.quadraticCurveTo(50, 2, 70, 2);
  context.quadraticCurveTo(80, 0, 80, 30);
  context.lineTo(52, 42);
  context.fill();
  context.stroke();

  // front left wing
  context.beginPath();
  context.moveTo(38, 48);
  context.quadraticCurveTo(2, 50, 2, 70);
  context.quadraticCurveTo(0, 80, 30, 80);
  context.lineTo(42, 52);
  context.fill();
  context.stroke();

  // back right wing
  context.beginPath();
  context.moveTo(55, 45);
  context.quadraticCurveTo(80, 30, 87, 37);
  context.quadraticCurveTo(95, 55, 80, 70);
  context.quadraticCurveTo(70, 65, 55, 45);
  context.fill();
  context.stroke();

  // back left wing
  context.beginPath();
  context.moveTo(45, 55);
  context.quadraticCurveTo(30, 80, 37, 87);
  context.quadraticCurveTo(55, 90, 70, 80);
  context.quadraticCurveTo(65, 70, 45, 55);
  context.fill();
  context.stroke();
};

$(document).ready(function() {
  drawMoth();

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