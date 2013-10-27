Array.prototype.uniq = function() {
  return this.filter(function(value, index) {
    return this.indexOf(value) == index;
  }.bind(this));
};