

$(document).ready(function(){
var name = "";
    // Clicking the first element will..
    $("#start_button").click(function(){
      // manipulate element's css styles
      $('#start_button').fadeOut("slow");
      $("#start_button").css("animation", "button_out 2s");
      $("#start_button").css("animation-fill-mode", "forwards");
      // And trigger a function with a delay
      setTimeout(function(){
        nextBox();
      }, 1000);
    }); // start_button

    // function to create a collection of html elements
    function nextBox() {
      var box = $("<div class='container' id='next_button'>");
      var txt1 = $("<label for='usr'>Name:</label>");
      var input = $("<input type='text' class='form-control' id='usr'>");
      $("body").append(box).fadeIn("slow");
      $("#next_button").append(txt1).fadeIn("slow");
      $("#next_button").append(input).fadeIn("slow");

    } // nextBox

    // When pressed the enter key on dynamically created input field
    $("body").on("keyup", "#usr", function(e) {
      if (e.which == 13) {
        // Input value is saved
        var name = $("#usr").val();
        // the div element is faded out
        $("#next_button").fadeOut("slow");
        // Running a function after delay and passing the input value as a parameter
        setTimeout(function(){
          greeting(name);
        }, 1000);

      }
    });

    // Function to create a htmls element to greet the visitor
    function greeting(name) {
      var box = $("<div class='container' id='greetings'>");
      // Greet the visitor
      var txt1 = $("<h3>Hello, " + name + " !</h3>");
      $("body").append(box).fadeIn("slow");
      $("#greetings").append(txt1).fadeIn("slow");
    }

}); // Main

// Clicking an dynamically created element
//$("body").on("click", "#submit1", function(){
  //alert("Enter key pressed");
//});
