var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.keyCounter = 0;
  return instance;
};

var stackMethods = {
  'push': function(val) {
    this.storage[this.keyCounter] = val;
    this.keyCounter++;
  },
  'pop': function() {
    if (this.keyCounter === 0) {
      return 0;
    }
    var deleted = this.storage[this.keyCounter - 1];
    delete this.storage[this.keyCounter - 1];
    this.keyCounter--;
    return deleted;
  },
  'size': function() {
    return this.keyCounter;
  }
};


