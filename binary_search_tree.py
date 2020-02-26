class TreeNode():
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None

class BinarySearchTree():
  def __init__(self, root=None):
    self.root = None

  def insert(self, data, node=None):

    # default case, if no node, start at root
    if not node:
      node = self.root
    
    # no root
    if not self.root:
      self.root = TreeNode(data)
      return self.root
    else:
      # there is a root
      if data < node.data and node.left == None:
        # the data is less than the curr node, and curr node has no left
        # initaite a new node as the curr node's left child
        node.left = TreeNode(data)
      elif data < node.data:
        # there is a left node, so recurse down the left side, passing in the left node to the insert function
        node.left = self.insert(data, node.left)
      elif data > node.data and node.right == None:
        # if the data is greater than curr node, and there is no right child
        # initiate a new node as the curr node's right child
        node.right = TreeNode(data)
      elif data > node.data:
        # the is a right node, so recurse down the right side, passing in the right node to the insert funciton
        node.right = self.insert(data, node.right)
    return node

  # depth-first-search
  def in_order(self, node=None):
    #left, root, right
    if not node:
      node = self.root
    if node:
      if node.left:
        self.in_order(node.left)
      print(node.data)

      if node.right:
        self.in_order(node.right)

  def pre_order(self, node=None):
    # root, left right
    if not node:
      node = self.root
    if node:
      print(node.data)
      if node.left:
        self.pre_order(node.left)
      if node.right:
        self.pre_order(node.right)
  
  def post_order(self, node=None):
    # left, right, root
    if not node:
      node = self.root
    if node:
      if node.left:
        self.post_order(node.left)
      if node.right:
        self.post_order(node.right)
      print(node.data)

bst = BinarySearchTree()
bst.insert(5)
bst.insert(10)
bst.insert(1)
bst.insert(14)
bst.insert(16)
bst.insert(19)
bst.insert(50)
bst.insert(20)
bst.insert(3)
bst.insert(7)
print('  ', bst.root.data)
print(' ', bst.root.left.data, ' ',  bst.root.right.data)
bst.in_order()