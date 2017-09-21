var hexDigits = "0123456789abcdef";
hexDigits = hexDigits.split("");


function decToHex(number) {
  if (/[^\d]/.test(number)) {
    return null;
  }
  var output = "";
  var numHexDigits = Math.floor(Math.log(number) / Math.log(16));
  for (var i = numHexDigits; i >= 0; i--) {
    var currentPower = Math.pow(16, i);
    var currentHexDigitValue = Math.floor(number / currentPower);
    output += hexDigits[currentHexDigitValue];
    number -= currentHexDigitValue * currentPower;
  }
  return output;
}








$(document).ready(function() {
  $("form#hex").submit(function(event) {
    event.preventDefault();
    var userInput = $("#hex input").val();
    var output = decToHex(userInput);
    if (output === null) {
      output = "That ain't no number!"
    }
    $("#output h1").text(output);
  });
});
