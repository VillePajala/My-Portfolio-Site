

$(document).ready(function(){

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
      var txt1 = $("<div class='container' id='next_button'>");
      var txt2 = $("<label for='usr'>Name:</label>");
      var txt3 = $("<input type='text' class='form-control' id='usr'>");
      $("body").append(txt1).fadeIn("slow");
      $("#next_button").append(txt2).fadeIn("slow");
      $("#next_button").append(txt3).fadeIn("slow");

    } // nextBox

    // When pressed the enter key on dynamically created input field
    $("body").on("keyup", "#usr", function(e) {
    if (e.which == 13) {
        alert("Enter");
    }
});

}); // Main

// Clicking an dynamically created element
//$("body").on("click", "#submit1", function(){
  //alert("Enter key pressed");
//});
