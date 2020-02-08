/* Increasing Order Binary Search Tree
Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9 
*/

function Node(val) {
	this.val = val
	this.left = this.right = null
}

function increasingOrderBST(root) {
	const res = []

	function recurse(node) {
		if (!node) return

		recurse(node.left)
		res.push(node.val)

		recurse(node.right)
	}
	recurse(root)

	const resTree = new Node(res[0])
	function tree(node) {
		if (res[i] === undefined) return
		node.right = new Node(res[i])
		tree(node.right, ++i)
	}
	tree(resTree, (i = 1))

	return resTree
}

const n = new Node(5)
n.left = new Node(3)
n.left.left = new Node(2)
n.left.right = new Node(4)
n.left.left.left = new Node(1)
n.right = new Node(6)
n.right.right = new Node(8)
n.right.right.left = new Node(7)
n.right.right.right = new Node(9)

console.log(JSON.stringify(increasingOrderBST(n), null, 4))
