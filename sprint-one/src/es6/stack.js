class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.keyCounter = 0;
  }

  push(val) {
    this.storage[this.keyCounter] = val;
    this.keyCounter++;
  }

  pop() {
    if (this.keyCounter === 0) {
      return 0;
    }
    var deleted = this.storage[this.keyCounter - 1];
    delete this.storage[this.keyCounter - 1];
    this.keyCounter--;
    return deleted;
  }

  size() {
    return this.keyCounter;
  }

}