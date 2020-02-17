/* Cousins in Binary Tree
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
Return true if and only if the nodes corresponding to the values x and y are cousins.

Example 1: x=4, y=3
    1
   / \
  2   3
 /
4
output: false

Example 2: x=5, y=4
    1
   / \
  2   3
   \   \
    4   5
output: true

Example 3: x=2, y=3
    1
   / \
  2   3
   \
    4
output: false
*/

function Node(val) {
    this.val = val;
    this.left = this.right = null;
}
 
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let cousinX = {}, cousinY = {};
    function dfs(node, i = 0) {
        i++
        if (node.left && node.left.val == x || node.right && node.right.val == x) {
            cousinX['parent'] = node.val
            cousinX['depth'] = i
            return
        } else if (node.left && node.left.val == y || node.right && node.right.val == y) {
            cousinY['parent'] = node.val
            cousinY['depth'] = i
            return
        }
        
        node.left.val && dfs(node.left, i)
        node.right.val && dfs(node.right, i)
    } dfs(root)
    
    if (cousinX.parent !== cousinY.parent)
        if (cousinX.depth == cousinY.depth)
            return true

    return false
};

let n = new Node(1)
n.left = new Node(2)
n.right = new Node(3)
n.left.right = new Node(4)
n.right.right = new Node(5)
