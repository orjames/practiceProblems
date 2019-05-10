class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // adds value onto the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // removes and returns the value at the end of the stack
  pop() {
    // check if stack is empty
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // returns length of the stack
  size() {
    return this.count;
  }
}
