const Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keysCounter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[keysCounter] = value;
    keysCounter++;
  };

  someInstance.pop = function() {
    if (keysCounter === 0) {
      return 0;
    } else {
      var deleted = storage[keysCounter - 1];
      delete storage[keysCounter];
      keysCounter--;
      return deleted;
    }
  };

  someInstance.size = function() {
    return keysCounter;
  };

  return someInstance;
};
