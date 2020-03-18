/* Invert Binary Tree
Invert a binary tree.

Example 1:
  Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9

  Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1

Example 2:
  Input:
    2
   /
  3
 /
1

  Output:
    2
     \
      3
       \
        1

Trivia:
  This problem was inspired by this original tweet by Max Howell:
  Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
*/

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if (root == null) return root

	invertTree(root.left)
	invertTree(root.right)

	let left = root.left
	root.left = root.right
	root.right = left

	return root
}
