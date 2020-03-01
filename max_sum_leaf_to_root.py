# to check if file has right to be executed type in linux chmod +x file.py
class Node:
	# Constructor to create a new node
	def __init__(self, data):
		self.data = data
		self.left = None
		self.right = None

	def __repr__(self):
		return str(self.data)


# Compare left and right values and add the higher value to the root node
def calc_max_sum(root):

  # this is the base case for recursion
  # if passing in an invalid node
  if not root:
    return 0
	
  left = calc_max_sum(root.left)
  right = calc_max_sum(root.right)

  return max(left + root.data, right + root.data)

# Find max sum and print max sum Path
def find_max_sum_and_print(root):
	max_sum = calc_max_sum(root)
	print("Max Sum from root to Leaf Node is:", max_sum)

# nothing

# Driver
if __name__ == '__main__':
	root = Node(1)
	root.left = Node(2)
	root.right = Node(3)
	root.left.left = Node(8)
	root.left.right = Node(4)
	root.right.left = Node(5)
	root.right.right = Node(6)
	root.left.right.left = Node(10)
	root.right.left.left = Node(7)
	root.right.left.right = Node(9)
	root.right.right.right = Node(5)

	find_max_sum_and_print(root)