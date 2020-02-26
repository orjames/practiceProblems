class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// this funciton returns the maximum path sum
var maxPathSum = function(root) {
  var best = -Infinity;
  
  function _maxPathSum(root) {
     // base case
    if (!root) {
      return 0;
    };
    
    if (root.val > best) {
      best = root.val;
    }
    
    var left = _maxPathSum(root.left);
    var right = _maxPathSum(root.right);
    var sum = root.val;
    
    if (left > 0) {
      sum = sum + left;
    }
    if (right > 0) {
      sum = sum + right;
    }
    if (sum > best) {
      best = sum;
    }
    
    return root.val + Math.max(left, right, 0);
  }
  
  _maxPathSum(root);
  
  return best;
};
