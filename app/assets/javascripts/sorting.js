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
};

var sortQuestions = function(questions, property) {
  return questions.sort(function(a, b) {
    if(a[property] < b[property]) {
      return 1;
    }
    else if(a[property] > b[property]) {
      return -1;
    }
    else {
      return 0;
    }
  });
};

$(document).ready(function() {
  $("#recent-filter").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/questions',
      dataType: 'json'
    }).done(function(response) {
      $('body ol').empty();
      fillQuestIndex(sortQuestions(response, 'created_date'));
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
      fillQuestIndex(sortQuestions(response, 'vote_count'));
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });

  $("#trending-filter").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/questions',
      dataType: 'json'
    }).done(function(response) {
      $('body ol').empty();
      fillQuestIndex(sortQuestions(response, 'trendiness'));
    }).fail(function(response) {
      console.log('Bad: ' + response);
    });
  });
});
