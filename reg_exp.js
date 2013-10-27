RegExp.prototype.exec_all = function(string) {
  if(this.global) return this.exec(string);
  var global_version = new RegExp(this.source, 'g');

  var matches = [];
  while((raw_match = global_version.exec(string))) {
    matches.push(raw_match);
  }
  
  return matches;
};