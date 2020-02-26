class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left_child = null;
    this.right_child = null;
  }

  // let's work on the insert method. If the Node doesn't have left_child then create a new Node and set it to the current node's left_child
  // if it does have a left_child we create a new node a put it in the left_child's place. allocate this left child node to the new nodes left_child
  insertLeft = (value) => {
    if (!this.left_child) {
      // if no left child
      this.left_child = new BinaryTreeNode(value);
    } else {
      // there is a left child
      const newNode = new BinaryTreeNode(value);
      // bump the old left_child down
      newNode.left_child = this.left_child;
      this.left_child = newNode;
    }
  }

  insertRight = (value) => {
    if (!this.right_child) {
      // if no right_child
      this.right_child = new BinaryTreeNode(value);
    } else {
      // there is a right_child
      const newNode = new BinaryTreeNode(value);
      // bump the old right_child down
      newNode.right_child = this.right_child;
      this.right_child = newNode;
    }
  }

  // depth-first-search
  preOrder = () => {
    console.log(this.value);
    if (this.left_child) {
      this.left_child.preOrder();
    }
    if (this.right_child) {
      this.right_child.preOrder();
    }
  };
  inOrder = () => {
    if (this.left_child) {
      this.left_child.inOrder();
    }
    console.log(this.value);
    if (this.right_child) {
      this.right_child.inOrder();
    }
  };
  postOrder = () => {
    if (this.left_child) {
      this.left_child.postOrder();
    }
    if (this.right_child) {
      this.right_child.postOrder();
    }
    console.log(this.value);
  };

  // Breadth-First Search
  breadthFirstSearch = () => {
    const queue = new Queue();
    queue.enqueue(this);

    while(queue.size() !== 0) {
      let current_node = queue.dequeue();
      console.log(current_node.value);

      if (current_node.left_child) {
        queue.enqueue(current_node.left_child)
      }
      if (current_node.right_child) {
        queue.enqueue(current_node.right_child)
      }
    }
  }

  
}

const a_node = new BinaryTreeNode('a')
a_node.insertLeft('b')
a_node.insertRight('c')

const b_node = a_node.left_child
b_node.insertRight('d')

const c_node = a_node.right_child
c_node.insertLeft('e')
c_node.insertRight('f')

const d_node = b_node.right_child
const e_node = c_node.left_child
const f_node = c_node.right_child

console.log(a_node.value)
console.log(b_node.value)
console.log(c_node.value)
console.log(d_node.value)
console.log(e_node.value)
console.log(f_node.value)

console.log(a_node.inOrder());