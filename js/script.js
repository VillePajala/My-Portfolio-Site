

$(document).ready(function(){

    $("#start_button").click(function(){



      $('#start_button').fadeOut("slow");
      $("#start_button").css("animation", "button_out 2s");
      $("#start_button").css("animation-fill-mode", "forwards");
      setTimeout(function(){
        nextBox();

      }, 2000);
    });


    function nextBox() {
      var txt1 = $("<div id='next_button'><h3>Start<br>Here</h3></div>");
      // $("div").attr('id', 'next_button');
      $("body").append(txt1).fadeIn("slow");

    }

}); // Main
