function TreeNode(val) {
    this.val = val
    this.right = this.left = null
}

// Given a binary tree, return the sum of values of its deepest leaves
// Example 1:
//     1
//   2   3
//  4 5    6
// 7        8

// output: 15
// explanation: 7 + 8 = 15

function deepestLeavesSum(root) {
}

let node = new TreeNode(1)
node.left = new TreeNode(2)
node.left.left = new TreeNode(4)
node.left.left.left = new TreeNode(7)
node.left.right = new TreeNode(5)
node.right = new TreeNode(3)
node.right.right = new TreeNode(6)
node.right.right.right = new TreeNode(8)

// console.log(JSON.stringify(node,null,2))
console.log(deepestLeavesSum(node))
