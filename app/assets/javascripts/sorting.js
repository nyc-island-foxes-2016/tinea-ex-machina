var formatQuestAsHtml = function(question) {
  var htmlString = '<li><div class="question-link"><h3>';
  htmlString += '<a href="/questions/' + question.id + '">' + question.title + '</a>'
  htmlString += '</h3><h4>' + question.vote_count + ' Vote';
  if(question.vote_count != 1) {htmlString += 's'};
  htmlString += '</h4><div class="timestamp">Posted by ';
  htmlString += '<a href="/users/' + question.user_id + '">' + question.username + '</a>';
  htmlString += ' at ' + question.update_time;
  htmlString += '</div></div></li>';
  return htmlString;
};

var fillQuestIndex = function(questions) {
  questions.forEach(function(question) {
    $('body ol').append(formatQuestAsHtml(question));
  });
}

$(document).ready(function() {
  $("#recent-filter").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/questions',
      dataType: 'json'
    }).done(function(response) {
      $('body ol').empty();
      fillQuestIndex(response.sort(function(a, b) {
        if(a.update_time < b.update_time) {
          return 1;
        }
        else if(a.update_time > b.update_time) {
          return -1;
        }
        else {
          return 0;
        }
      }));
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });

  $("#voted-filter").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/questions',
      dataType: 'json'
    }).done(function(response) {
      $('body ol').empty();
      fillQuestIndex(response.sort(function(a, b) {
        if(a.vote_count < b.vote_count) {
          return 1;
        }
        else if(a.vote_count > b.vote_count) {
          return -1;
        }
        else {
          return 0;
        }
      }));
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });
});
