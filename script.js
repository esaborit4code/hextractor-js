jQuery(function($) {  
  var append_box_for_color = function(color) {
    var box = $("<div>").addClass("color").text(color).css('background-color', color);
    $("#result").append(box);
  };
  
  var show_colors = function(colors) {
    $("#result").empty();
    colors.map(function(color) { append_box_for_color(color); });
  };
  
  $(document).ready(function() {
    $("#button").click(function() {
      var origin = $("#input").val();
      show_colors(Hextractor.hextract(origin));
    });
    
    var pointer = $("#pointer");
    
    $("#result").mousemove(function(event) {
      pointer.css({top: event.pageY, left: event.pageX});
    });
    
    $("#search_button").click(function() {
      var color = $("#color").val();
      pointer.css("background-color", color);
    });
  });
});
