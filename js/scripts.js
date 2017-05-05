//back
function isNumber(input) {

  if (isNaN(input)) {
    return false;
  } else {
    return true;
  }
};

function pingPong(input) {

  if (isNumber(input)) {
    return input;
  } else {
    return "Please enter a number";
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
