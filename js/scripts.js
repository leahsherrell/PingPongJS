//back

function pingPong(input) {
  var output = [];
    for (i = 1; i <= input; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        output.push('ping pong');
      } else if (i % 5 == 0) {
        output.push('pong');
      } else if (i % 3 == 0) {
        output.push('ping');
      } else if (i % 3) {
        output.push(i);
      }
  }
  return output;
};

//front
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input").val();
    var result = pingPong(userInput);

    $(result).each(function (index) {
        $('ul').append("<li>" + result[index] + "</li>");
    });
  });
});
