//back


//front
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input").val());

    $("ul").append(userInput);
  });
});
