

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
      var txt1 = $("<label for='usr'>What is your name?</label>");
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
      var txt1 = $("<h1>Nice to meet you, " + name + "!</h1>");
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
        $("#question").css("margin-top", "275px");
        $("#question").animate({"margin-top" : "-=240px"}, 1500, "swing");
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

    // if the "art" -element is clicked
    $("body").on("click", "#art", function(){
      // fadeout all unused menu items
      $("#music").fadeOut("slow");
      $("#games").fadeOut("slow");
      $("#design").fadeOut("slow");
      $("#info").fadeOut("slow");
      // run function to show realted content
      setTimeout(function(){
        showArt();
      }, 600); // setTimeout
    }); // on(click) #art

    // if the "music" -element is clicked
    $("body").on("click", "#music", function(){
      // fadeout all unused menu items
      $("#art").fadeOut("slow");
      $("#games").fadeOut("slow");
      $("#design").fadeOut("slow");
      $("#info").fadeOut("slow");

      // Animate the chosen menu item
      setTimeout(function(){
        $("#music").css("margin-top", "107px");
        $("#music").animate({"margin-top" : "-=100px"}, 1500, "swing");
      }, 600); // setTimeout

      // run function to show realted content
      setTimeout(function(){
        showMusic();
      }, 2100); // setTimeout
    }); // on(click) #music

    // if the "games" -element is clicked
    $("body").on("click", "#games", function(){
      // fadeout all unused menu items
      $("#art").fadeOut("slow");
      $("#music").fadeOut("slow");
      $("#design").fadeOut("slow");
      $("#info").fadeOut("slow");

      // Animate the chosen menu item
      setTimeout(function(){
        $("#games").css("margin-top", "187px");
        $("#games").animate({"margin-top" : "-=180px"}, 1500, "swing");
      }, 600); // setTimeout

      // run function to show realted content
      setTimeout(function(){
        showGames();
      }, 2100); // setTimeout
    }); // on(click) #games

    // if the "design" -element is clicked
    $("body").on("click", "#design", function(){
      // fadeout all unused menu items
      $("#art").fadeOut("slow");
      $("#music").fadeOut("slow");
      $("#games").fadeOut("slow");
      $("#info").fadeOut("slow");

      // Animate the chosen menu item
      setTimeout(function(){
        $("#design").css("margin-top", "267px");
        $("#design").animate({"margin-top" : "-=260px"}, 1500, "swing");
      }, 600); // setTimeout

      // run function to show realted content
      setTimeout(function(){
        showDesign();
      }, 2100); // setTimeout

    }); // on(click) #design

    // if the "info" -element is clicked
    $("body").on("click", "#info", function(){
      // fadeout all unused menu items
      $("#art").fadeOut("slow");
      $("#music").fadeOut("slow");
      $("#games").fadeOut("slow");
      $("#design").fadeOut("slow");

      // Animate the chosen menu item
      setTimeout(function(){
        $("#info").css("margin-top", "347px");
        $("#info").animate({"margin-top" : "-=340px"}, 1500, "swing");
      }, 600); // setTimeout

      // run function to show realted content
      setTimeout(function(){
        showInfo();
      }, 2100); // setTimeout
    }); // on(click) #info

    // if "question" is clicked
    $("body").on("click", "#question", function(){
      // fadeout all menu items
      $("#art").fadeOut("slow");
      $("#music").fadeOut("slow");
      $("#games").fadeOut("slow");
      $("#design").fadeOut("slow");
      $("#info").fadeOut("slow");

      // After a delay
      setTimeout(function(){
        // remove all menu itmes complitely
        $("#art").remove();
        $("#music").remove();
        $("#games").remove();
        $("#design").remove();
        $("#info").remove();
        // Run function to create menu items again
        showCategories();
      }, 1000); // setTimeout
    }); // on(click) #question

    function showArt() {

    } // showArt()

    function showMusic() {

    } // showMusic()

    function showGames() {

    } // showGames()

    function showDesign() {
      var box = $("<div class='container' id='layout'>");
      var img = $("<img class='img-fluid' src='images/lay_out_ex_1.jpg'></img>)");
      var txt = $("<h6>Saisinko Lisää, 2017</h6>");

      $("body").append(box).fadeIn("slow");
      $("#layout").append(img).fadeIn("slow");
      $("#layout").append(txt).fadeIn("slow");

    } // showDesign()

    function showInfo() {

    } // showInfo()




}); // Main
