jQuery(function($) {  
  var append_box_for_color = function(color) {
    var box = $("<div>").addClass("color").text(color).css('background-color', color);
    $("#result").append(box);
  };
  
  $(document).ready(function() {
    $("#button").click(function() {
      var origin = $("#input").val();
      var colors = Hextractor.hextract(origin);
      $(colors).each(function() {
        append_box_for_color(this);
      });
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
