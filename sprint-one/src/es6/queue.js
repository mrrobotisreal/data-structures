class Queue {

  constructor() {
    this.storage = {};
    this.keyCounter = 0;
  }

  enqueue(val) {
    this.storage[this.keyCounter] = val;
    this.keyCounter++;
  }

  dequeue() {
    var dqdkeys = Object.keys(this.storage);
    if (dqdkeys.length === 0) {
      return 0;
    }
    var dqd = Object.values(this.storage)[0];
    delete this.storage[dqdkeys[0]];
    return dqd;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
