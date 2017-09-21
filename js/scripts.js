$(document).ready(function() {
  $("form#hex").submit(function(event) {
    event.preventDefault();
    var userInput = $("#hex input").val();
    var output = userInput;
    $("#output h1").text(output);
  });
});
