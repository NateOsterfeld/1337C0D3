/*
783. Minimum Distance (Difference) Between BST Nodes 
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \    
    1   3  

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
Note:

The size of the BST will be between 2 and 100.
The BST is always valid, each node's value is an integer, and each node's value is different.
*/

const TreeNode = require('./treeNode')

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = root => {
  const list = bstToList(root, [])
  list.reduce((min, val, i) => {
    return Math.min(list[i] - list[i-1])
  }, Infinity)

}

const bstToList = (curr, list) => {
  if (!curr)
    return
  
  bstToList(curr.left, list)
  list.push(curr.val)
  bstToList(curr.right, list)
  return list
}

const bst = new TreeNode(4)
bst.insert(2)
bst.insert(6)
bst.insert(1)
bst.insert(4)
console.log(JSON.stringify(bst, null, 2))
console.log(minDiffInBST(bst))
