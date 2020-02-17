
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
};

let n = new Node(1)
n.left = new Node(2)
n.right = new Node(3)
n.left.right = new Node(4)
n.right.right = new Node(5)

console.log(isCousins(n, 4, 5))