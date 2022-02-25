const Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keysCounter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[keysCounter] = value;
    keysCounter++;
  };

  someInstance.dequeue = function() {
    if (keysCounter === 0) {
      return 0;
    } else {
      var keys = Object.keys(storage);
      var dequeued = Object.values(storage)[0];
      delete storage[keys[0]];
      return dequeued;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
