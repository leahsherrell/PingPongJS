//back
function isPositiveNumber(input) {

  if (isNaN(input) || input < 1) {
    return false;
  } else {
    return true;
  }
};

function pingPong(input) {

  if (isPositiveNumber(input)) {
    return input;
  } else {
    return "Please enter a positive whole number";
  }
};

//front
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input").val();
    var result = pingPong(userInput);

    $("ul").text(result);
  });
});
