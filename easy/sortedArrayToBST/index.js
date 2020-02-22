/* Convert Sorted Array To Binary Search Tree
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node 
never differ by more than 1.

Example:
Given the sorted array: [-10,-3,0,5,9],
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 */

function Node(val) {
    this.val = val
    this.right = this.left = null
}

function sortedArrayToBST(nums) {
}

console.log(JSON.stringify(sortedArrayToBST([1,2,3,4,5,6,7,8,9]), null, 4))
