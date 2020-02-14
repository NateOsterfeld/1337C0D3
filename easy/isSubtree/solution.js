function Node(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
* @param {Node} s
* @param {Node} t
* @return {boolean}
*/
var isSubtree = function(s, t) {
  if (!s) return false
  
  if (s.val == t.val && isSameTree(s,t))
      return true
  
  return isSubtree(s.left, t) || isSubtree(s.right, t)
}

function isSameTree(s, t) {
  if (!s && !t) return true
  if ((!s || !t) || (s.val !== t.val)) return false
  
  let left = isSameTree(s.left, t.left)
  let right = isSameTree(s.right, t.right)
  
  return left && right
}



// alt
var _isSubtree = function(s, t) {
  function recurse(s, t) {
      if (!s) return false
      
      if (s.val == t.val && isSameTree(s, t))
          return true
      
      return recurse(s.left, t) || recurse(s.right, t)
  }

  return recurse(s, t) 
};
