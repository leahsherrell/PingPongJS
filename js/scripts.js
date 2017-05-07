//back

function positiveNumber(input) {

  if (isNaN(input) || input < 1) {
    return false;
  } else {
    return true;
  }
};

function pingPong(input) {
  var output = [];
  if (!positiveNumber(input)) {
    output.push("Please enter a positive whole number.");
    return output;
  }

  for (i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push('ping pong');
    } else if (i % 5 === 0) {
      output.push('pong');
    } else if (i % 3 === 0) {
      output.push('ping');
    } else if (i) {
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
    $("input").val("");
    var result = pingPong(userInput);

    $('ul').empty();
    $(result).each(function (index) {
        $('ul').append("<li>" + result[index] + "</li>");
    });
  });
});
