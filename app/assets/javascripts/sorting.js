var stdFormatDate = function(dateTime) {
  // FROM   Sat, 23 Jan 2016 04:27:44 UTC +00:00
  // TO     Jan 23 2016 04:27 AM
  var newDate = /\d{2} {1}[A-Z]{1}[a-z]{2} \d{4}/.exec(dateTime);
  var hour = /\d{2}\:/.exec(dateTime).join().substr(0, 2);
  var newTime = /\:\d{2}/.exec(dateTime);
  if(hour > 12) {
    newTime = (hour - 12) + newTime + ' PM';
  }
  else {
    newTime = hour + newTime + ' AM';
  }
  return newDate + ' ' + newTime;
};

var formatQuestAsHtml = function(question) {
  var htmlString = '<li><div class="question-link"><h3>';
  htmlString += '<a href="/questions/' + question.id + '">' + question.title + '</a>'
  htmlString += '</h3><h4>' + question.votes.length + ' Vote</h4><div class="timestamp">Posted by ';
  htmlString += '<a href="/users/' + quesion.user.id + '">' + question.user.username + '</a>';
  htmlString += ' at ' + stdFormatDate(question.created_at);
  htmlString += '</div></div></li>';
  return htmlString;
};

$(document).ready(function() {
  $("#recent-filter").on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/questions',
    }).done(function(response) {
      $('body ol').empty();
      console.log(response);
      response.forEach(function(question) {
        $('body ol').append(formatQuestAsHtml(question));
      });
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
