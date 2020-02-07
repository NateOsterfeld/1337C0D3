/* 617. Merge Two Binary Trees
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. 
Otherwise, the NOT null node will be used as the node of new tree.

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
     5   4   7
*/

function Node(val) {
    this.val = val
    this.right = this.left = null
}

var mergeTrees = function(t1, t2) {
}

const n1 = new Node(1)
n1.left = new Node(3)
n1.left.left = new Node(5)
n1.right = new Node(2)

const n2 = new Node(2)
n2.left = new Node(1)
n2.left.right = new Node(4)
n2.right = new Node(3)
n2.right.right = new Node(7)

// console.log(JSON.stringify(n1, null, 4))
// console.log(JSON.stringify(n2, null, 4))
console.log(JSON.stringify(mergeTrees(n1, n2), null, 4))
