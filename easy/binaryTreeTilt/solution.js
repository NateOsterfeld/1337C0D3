/* Binary Tree Tilt - https://leetcode.com/problems/binary-tree-tilt/
Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example 1:
Input: 
         1
       /   \
      2     3
Output: 1
Explanation: 
    Tilt of node 2 : 0
    Tilt of node 3 : 0
    Tilt of node 1 : |2-3| = 1
    Tilt of binary tree : 0 + 0 + 1 = 1

Example 2:
Input: 
        1
      /   \
     3     5
    / \     \
   2   1     6
    \
     4
*/

function Node(val) {
    this.val = val
    this.right = this.left = null
}

function findTilt(root) {
    if (!root.left && !root.right)
        return 0
    
    if (!root.left)
        return root.right.val
    
    if (!root.right)
        return root.left.val

    return Math.abs(root.left.val - root.right.val)
        + findTilt(root.left)
        + findTilt(root.right)
}

let n = new Node(1)
n.left = new Node(2)
n.right = new Node(3)
console.log(findTilt(n)) // 1

let n2 = new Node(1)
n2.left = new Node(3)
n2.right = new Node(5)
n2.left.left = new Node(2)
n2.left.right = new Node(1)
n2.right.right = new Node(6)
n2.left.left.right = new Node(4)
console.log(findTilt(n2)) // 13
