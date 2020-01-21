class TreeNode {
	constructor(val) {
		this.val = val
		this.left = this.right = null
	}

	insert(val) {
		if (val < this.val && this.left) this.left.insert(val)
		else if (val < this.val) this.left = new TreeNode(val)
		else if (val > this.val && this.right) this.right.insert(val)
		else if (val > this.val) this.right = new TreeNode(val)
	}
}

module.exports = TreeNode
