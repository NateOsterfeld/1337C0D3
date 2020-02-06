function TreeNode(val) {
	this.val = val
	this.right = this.left = null
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
	const key = root.val
	let res = true

	function traverse(node) {
		if (node.val !== key) res = false

		node.left && traverse(node.left)
		node.right && traverse(node.right)
	}
	traverse(root)

	return res
}
