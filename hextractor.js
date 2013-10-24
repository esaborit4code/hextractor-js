var clog = console.log;
jQuery(function($) {
  var HEX_COLOR_REGEXP = /#([0-9a-f]{3,6})/;
  
  var get_all_matches = function(string, regex) {
    var raw_match = regex.exec(string);
    if(!raw_match) { return [] }
    
    var first_match = raw_match[0];
    var the_rest_of_the_string = string.replace(first_match, '');
    var rest_of_matches = get_all_matches(the_rest_of_the_string, regex);
    
    return [first_match].concat(rest_of_matches);      
  };
  
  var remove_duplicated_colors = function(matches) {
    return matches.filter(function(color, index) {
      return matches.indexOf(color) == index;
    });
  };
  
  var order_matches = function(matches) {
    return matches.sort();
  };
  
  var hextract = function(string) {
    var matches = get_all_matches(string, HEX_COLOR_REGEXP);
    var lower_case_matches = matches.map(function(color) { return color.toLowerCase(); })
    var unique_matches = remove_duplicated_colors(matches);
    return ordered_matches = order_matches(unique_matches);
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
