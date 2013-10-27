Hextractor = { HEX_COLOR_REGEXP: /#([0-9a-f]{3,6})/ };

Hextractor.get_all_colors = function(string) {
  var all_raw_matches = Hextractor.HEX_COLOR_REGEXP.exec_all(string);
  return all_raw_matches.map(function(match) { return match[0]; });
};

Hextractor.hextract= function(string) {
  var colors = this.get_all_colors(string);
  var lower_case_colors = colors.map(function(color) { return color.toLowerCase(); })
  var unique_colors = lower_case_colors.uniq();
  return ordered_colors = unique_colors.sort();
};
