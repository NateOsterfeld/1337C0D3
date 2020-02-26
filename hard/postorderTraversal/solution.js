function Node(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * @param {Node} root
 * @return {number[]}
 */

var postorderTraversal = function(root) {
    return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : []
};

// var postorderTraversal = function(root) {
// 	if (!root) return []
// 	return postorderTraversal(root.left)
// 		.concat(postorderTraversal(root.right))
// 		.concat(root.val)
// }

// var postorderTraversal = function(root) {
//     let values = []
//     function dfs(node) {
//         node.left && dfs(node.left)
//         node.right && dfs(node.right)
//         values.push(node.val)
//     } root && dfs(root)
//     return values
// };
