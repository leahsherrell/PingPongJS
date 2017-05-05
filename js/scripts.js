//back
function isPositiveNumber(input) {

  if (isNaN(input) || input < 1) {
    return false;
  } else {
    return true;
  }
};



function pingPong(input) {
  var output = [];
  if (isPositiveNumber(input)) {
    var num = parseInt(input);
    for (i = 0; i <= num; i++) {
      var x = num --;
      output.push(x);
    }
  } else {
    output.push("Please enter a positive number");
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
