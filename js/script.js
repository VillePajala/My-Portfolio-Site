

$(document).ready(function(){

    $("#start_button").click(function(){

      $('#start_button').fadeOut("slow");
      $("#start_button").css("animation", "button_out 2s");
      $("#start_button").css("animation-fill-mode", "forwards");
      setTimeout(function(){
        nextBox();
      }, 1000);
    }); // start_button


    function nextBox() {
      var txt1 = $("<div class='container' id='next_button'>");
      var txt2 = $("<input>Name?</input>");
      // $("div").attr('id', 'next_button');
      $("body").append(txt1).fadeIn("slow");
      $("#next_button").append(txt2).fadeIn("slow");

    } // nextBox

}); // Main
