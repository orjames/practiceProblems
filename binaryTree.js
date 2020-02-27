class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // let's work on the insert method. If the Node doesn't have left then create a new Node and set it to the current node's left
  // if it does have a left we create a new node a put it in the left's place. allocate this left child node to the new nodes left
  insertLeft = (data) => {
    if (!this.left) {
      // if no left child
      this.left = new BinaryTreeNode(data);
    } else {
      // there is a left child
      const newNode = new BinaryTreeNode(data);
      // bump the old left down
      newNode.left = this.left;
      this.left = newNode;
    }
  }

  insertRight = (data) => {
    if (!this.right) {
      // if no right
      this.right = new BinaryTreeNode(data);
    } else {
      // there is a right
      const newNode = new BinaryTreeNode(data);
      // bump the old right down
      newNode.right = this.right;
      this.right = newNode;
    }
  }

  // depth-first-search
  preOrder = () => {
    console.log(this.data);
    if (this.left) {
      this.left.preOrder();
    }
    if (this.right) {
      this.right.preOrder();
    }
  };
  inOrder = () => {
    if (this.left) {
      this.left.inOrder();
    }
    console.log(this.data);
    if (this.right) {
      this.right.inOrder();
    }
  };
  postOrder = () => {
    if (this.left) {
      this.left.postOrder();
    }
    if (this.right) {
      this.right.postOrder();
    }
    console.log(this.data);
  };

  // Breadth-First Search
  breadthFirstSearch = () => {
    const queue = new Queue();
    queue.enqueue(this);

    while(queue.size() !== 0) {
      let current_node = queue.dequeue();
      console.log(current_node.data);

      if (current_node.left) {
        queue.enqueue(current_node.left)
      }
      if (current_node.right) {
        queue.enqueue(current_node.right)
      }
    }
  }

  
}

const a_node = new BinaryTreeNode('a')
a_node.insertLeft('b')
a_node.insertRight('c')

const b_node = a_node.left
b_node.insertRight('d')

const c_node = a_node.right
c_node.insertLeft('e')
c_node.insertRight('f')

const d_node = b_node.right
const e_node = c_node.left
const f_node = c_node.right

console.log(a_node.data)
console.log(b_node.data)
console.log(c_node.data)
console.log(d_node.data)
console.log(e_node.data)
console.log(f_node.data)

console.log(a_node.inOrder());