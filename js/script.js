

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
      var input = $("<input type='text' class='form-control' id='usr' autofocus>");
      $("body").append(box).fadeIn("slow");
      $("#next_button").append(txt1).fadeIn("slow");
      $("#next_button").append(input).fadeIn("slow");

    } // nextBox()

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
        }, 1000); // setTimeout
      } // if
    }); // on(keyup)

    // Function to create a htmls element to greet the visitor
    function greeting(name) {
      var box = $("<div class='container' id='greetings'>");
      // Greet the visitor
      var txt1 = $("<h1>Hello, " + name + " !</h1>");
      $("body").append(box).fadeIn("slow");
      $("#greetings").append(txt1).fadeIn("slow");

      // ask what the visitor wants to do next after delay
      setTimeout(function(){
        var box2 = $("<div class='container' id='question'>");
        var txt2 = $("<h1>What would you like to do?</h1>");
        $("body").append(box2).fadeIn("slow");
        $("#question").append(txt2).fadeIn("slow");
      }, 2000); // setTimeout

      // Fade out visitor greeting after delay
      setTimeout(function(){
        $("#greetings").fadeOut("slow");
      }, 4000); // setTimeout

      // Change the location of the question element when greetings fades fadeOut
      // Animate the question to move to the top pf the screen
      setTimeout(function(){
        $("#question").css("margin-top", "281px");
        $("#question").animate({"margin-top" : "-=200px"}, 1500, "swing");
      }, 4600); // setTimeout

      // After delay, the next function is called
      setTimeout(function(){
        showCategories();
      }, 6000); // setTimeout

    } // greeting(name)

    // Function to generate a 'menu' of categories to choose from
    function showCategories(){
      var box = $("<div class='container' id='art'>");
      var box2 = $("<div class='container' id='music'>");
      var box3 = $("<div class='container' id='games'>");
      var box4 = $("<div class='container' id='design'>");
      var box5 = $("<div class='container' id='info'>");
      var txt = $("<h1>See Art</h1>");
      var txt2 = $("<h1>Listen to Music</h1>");
      var txt3 = $("<h1>Play Games</h1>");
      var txt4 = $("<h1>See Graphic Design</h1>");
      var txt5 = $("<h1>Know who's behind this</h1>");
      $("body").append(box).fadeIn("slow");
      $("body").append(box2).fadeIn("slow");
      $("body").append(box3).fadeIn("slow");
      $("body").append(box4).fadeIn("slow");
      $("body").append(box5).fadeIn("slow");
      $("#art").append(txt).fadeIn("slow");
      $("#music").append(txt2).fadeIn("slow");
      $("#games").append(txt3).fadeIn("slow");
      $("#design").append(txt4).fadeIn("slow");
      $("#info").append(txt5).fadeIn("slow");
    }

}); // Main

// Clicking an dynamically created element
//$("body").on("click", "#submit1", function(){
  //alert("Enter key pressed");
//});
