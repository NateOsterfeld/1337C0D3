const L = require('../index')
const LinkedList = L.LinkedList
const ListNode = L.Node
// Given a non-empty, singly linked list with head node head, return a middle node of linked list.
// If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // NOTE: on the leetcode version we do not need to destructure the 'head' prop or use the if statements because head is already the node as compared to the course version
 // where we have the prop 'head' that then points to the actual head node. Also the course tests consider the midpoint to be different from the leetcode version when there's
 // an even amount of nodes
var middleNode = function({ head }) {
}

// const l = new LinkedList()
// l.insertFirst(1)
// l.insertFirst(2)
// l.insertFirst(3)
// l.insertFirst(4)
// l.insertFirst(5)
// console.log(middleNode(l))
module.exports = middleNode
