var formatQuestAsHtml = function(question) {
  '<li><div class="question-link"><h3>' +
  <%= link_to question.title, question_path(question) %> +
  '</h3><h4>' +
  <%= question.vote_count %> +
  ' Vote</h4><div class="timestamp">Posted by ' +
  <%= link_to question.user.username, question.user %> +
  ' at ' +
  <%= std_format_date(question.created_at) %> +
  '</div></div></li>';
};

$(document).ready(function() {
  $("#recent-filter").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/questions',
    }).done(function(response) {
      ;
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });

  $("#voted-filter").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/questions'
    }).done(function(response) {
      $('body ol').html(response);
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });
});
