var clog = console.log;
jQuery(function($) {
  var HEX_COLOR_REGEXP = /#([0-9a-f]{3,6})/;
  
  var get_all_colors = function(string) {
    var all_raw_matches = HEX_COLOR_REGEXP.exec_all(string);
    return all_raw_matches.map(function(match) { return match[0]; });
  };
  
  var hextract = function(string) {
    var colors = get_all_colors(string);
    var lower_case_colors = colors.map(function(color) { return color.toLowerCase(); })
    var unique_colors = lower_case_colors.uniq();
    return ordered_colors = unique_colors.sort();
  };
  
  var append_box_for_color = function(color) {
    var box = $("<div>").addClass("color").text(color).css('background-color', color);
    $("#result").append(box);
  };
  
  $(document).ready(function() {
    $("#button").click(function() {
      var origin = $("#input").val();
      var colors = hextract(origin);
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
