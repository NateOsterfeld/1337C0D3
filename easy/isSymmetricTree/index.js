/* Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
*/

function Node(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * @param {Node} root
 * @return {boolean}
 */
const isSymmetric = root => {
}

const n = new Node(1)
n.left = new Node(2)
n.right = new Node(2)
n.left.left = new Node(3)
n.left.right = new Node(4)
n.right.left = new Node(4)
n.right.right = new Node(3)
console.log(isSymmetric(n)) // true

const n2 = new Node(1)
n2.left = new Node(2)
n2.right = new Node(2)
n2.left.right = new Node(3)
n2.right.right = new Node(3)
console.log(isSymmetric(n2)) // false

