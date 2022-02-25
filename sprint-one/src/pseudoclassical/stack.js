var Stack = function() {
  this.storage = {};
  this.keyCounter = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.keyCounter] = val;
  this.keyCounter++;
};

Stack.prototype.pop = function() {
  if (this.keyCounter === 0) {
    return 0;
  }
  var deleted = this.storage[this.keyCounter - 1];
  delete this.storage[this.keyCounter - 1];
  this.keyCounter--;
  return deleted;
};

Stack.prototype.size = function() {
  return this.keyCounter;
};
