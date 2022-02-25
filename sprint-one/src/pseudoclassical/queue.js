var Queue = function() {
  this.storage = {};
  this.keyCounter = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.keyCounter] = val;
  this.keyCounter++;
};

Queue.prototype.dequeue = function() {
  var dqdkeys = Object.keys(this.storage);
  if (dqdkeys.length === 0) {
    return 0;
  }
  var dqd = Object.values(this.storage)[0];
  delete this.storage[dqdkeys[0]];
  return dqd;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
