class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// linkedList class

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // functions to add to the linked list include:
  // add(element)
  add(element) {
    let node = new Node(element); // creates a new node
    let current; // this will be used to store current

    // if list is empty add the element and make it the head
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // iterate through the list until at the end
      while (current.next) {
        current = current.next;
      }

      current.next = node; // add node
    }
    this.size++;
  }

  // insertAt(element, index)
  insertAt(element, index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      let node = new Node(element); // creates a new node
      let curr, prev;
      curr = this.head;

      if (index === 0) {
        // add the element to the head
        node.next = this.head;
        this.head = node;
      } else {
        let i = 0;
        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  // removeFrom(location)
  removeFrom(index) {
    if (index > 0 && index > this.size) {
      return -1;
    } else {
      let curr,
        prev,
        i = 0;
      curr = this.head;
      prev = curr;

      // if deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the position to rm element
        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the removed element
      return curr.element;
    }
  }

  // removeElement(element)
  removeElement(element) {
    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (current.element === element) {
        if ((prev = null)) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // helper methods
  // indexOf
  indexOf(element) {
    let count = 0;
    let current = this.head;

    // iterate over list
    while (current !== null) {
      // compare each element of the list with each given element
      if (current.element === element) {
        return count;
      }
      count++;
      current = current.next;
    }
    // not found
    return -1;
  }
  // isEmpty
  isEmpty() {
    return this.size === 0;
  }
  // sizeOfList
  sizeOfList() {
    console.log(this.size);
  }
  // printList
  printList() {
    let curr = this.head;
    let list = [];
    while (curr) {
      list.push(curr.element);
      curr = curr.next;
    }
    console.log(list);
  }

  // removeDups removes all duplicate data
  removeDups() {
    let elements = [];
    let current = this.head;
    let prev = null;

    while (current) {
      if (elements.includes(current.element)) {
        prev.next = current.next;
      } else {
        elements.push(current.element);
        previous = current;
      }
      current = current.next;
    }
  }
}

myList = new LinkedList();
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
myList.printList();
myList.add(4);
myList.add(3);
myList.printList();
mylist.removeDups();
myList.printList();
