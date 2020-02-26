class TreeNode {
  constructor(data) {
    this.data = data;
    this.left_child = null;
    this.right_child = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data, node=null) {
    // if starting node wasn't passed in, start at the root (usually the case, only not the case when called recursively)
    if (!node) {
      var node = this.root;
    }
    // if no root, make the inserted node the root
    if (!this.root) {
      this.root = new TreeNode(data);
      return this.root;
    } else {
      // there is a root
      if (data < node.data && node.left_child === null) {
        // belongs on the left and there is no left child
        node.left_child = new TreeNode(data);
      } else if (data < node.data) {
        // new node belongs on the left, and there is a left_child
        node.left_child = this.insert(data, node.left_child);
      } else if (data > node.data && node.right_child === null) {
        // new node belongs on the right and there is no right_child
        node.right_child = new TreeNode(data)
      } else if (data > node.data) {
        // new node belongs on the right and there is a right_child
        node.right_child = this.insert(data, node.right_child);
      }
    }
    return node;
  }

  inOrder(node=null) {
    // left, root, right
    if (!node) {
      node = this.root;
    }
    if (node) {
      if(node.left_child) {
        this.inOrder(node.left_child);
      }
      console.log(node.data);

      if (node.right_child) {
        this.inOrder(node.right_child);
      }
    }
  }

  preOrder(node=null) {
    // root, left, right
    if (!node) {
      node = this.root;
    }
    if (node) {
      console.log(node.data);
      if (node.left_child) {
        this.preOrder(node.left_child)
      }
      if (node.right_child) {
        this.preOrder(node.right_child)
      }
    }
  }

  postOrder(node=null) {
    // left, right, root
    if (!node) {
      node = this.root;
    }
    if (node) {
      if (node.left_child) {
        this.postOrder(node.left_child);
      }
      if (node.right_child) {
        this.postOrder(node.right_child);
      }
      console.log(node.data)
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(8)
tree.insert(4)
tree.insert(16)
tree.insert(5)
tree.insert(2)
console.log('left, root, right')
console.log(tree.inOrder())

console.log('root left right')
console.log(tree.preOrder())

console.log('left, right, root')
console.log(tree.postOrder())