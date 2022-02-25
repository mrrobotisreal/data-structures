var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.keyCounter = 0;
  return instance;
};

var queueMethods = {
  'enqueue': function(val) {
    this.storage[this.keyCounter] = val;
    this.keyCounter++;
  },
  'dequeue': function() {
    var dqdkeys = Object.keys(this.storage);
    if (dqdkeys.length === 0) {
      return 0;
    }
    var dqd = Object.values(this.storage)[0];
    delete this.storage[dqdkeys[0]];
    return dqd;
  },
  'size': function() {
    return Object.keys(this.storage).length;
  }
};


