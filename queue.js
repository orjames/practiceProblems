class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // adds a value to the beginning of chain
  enqueue(value) {
    // checks if value is defined
    if (value) {
      this.storage[this.count] = value;
      this.count++;
    }
  }

  dequeue() {
    // check to see if queue is empty
    if (this.count - this.lowestCount === 0) {
      return undefined;
    }

    let result = this.storage[this.lowestCount];
    delete this.storage[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  size() {
    return this.count - this.lowestCount;
  }
}
