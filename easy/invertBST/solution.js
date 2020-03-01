/* Invert a binary search tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
           \
           10
Output:

        4
      /   \
     7     2
    / \   / \
   9   6 3   1
  /
10
*/

function Node(val) {
	this.val = val
	this.left = this.right = null
}

/**
 * @param {Node} root
 * @return {Node}
 */
var invertTree = function(root) {
	function invert(l, r) {
		if (!l || !r) return

		let temp = r.val
		r.val = l.val
		l.val = temp

		if (!l.left) {
			l.left = r.right
			r.right = null
		} else if (!r.right) {
			r.right = l.left
			l.left = null
		}

		invert(l.left, r.right)
		invert(l.right, r.left)
	}
	invert(root.left, root.right)

	return root
}

const n = new Node(4)
n.left = new Node(2)
n.right = new Node(7)
n.left.left = new Node(1)
n.left.right = new Node(3)
n.right.left = new Node(6)
n.right.right = new Node(9)
n.right.right.right = new Node(10)
// n.left.left.left = new Node(11)

console.log(JSON.stringify(invertTree(n), null, 4))
