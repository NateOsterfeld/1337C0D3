// 237. Delete Node in a Linked List - https://leetcode.com/problems/delete-node-in-a-linked-list/
// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
}

// const l = new LinkedList()
// l.insertLast(4)
// l.insertLast(5)
// l.insertLast(1)
// l.insertLast(9)

// var testDeleteNode = (list, i) => {
//     deleteNode(list.getAt(i))
//     list = list.convertToArray()
//     return list
// }

// console.log(testDeleteNode(l, 1)) // [4, 1, 9]
module.exports = deleteNode
