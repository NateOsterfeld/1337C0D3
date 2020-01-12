const L = require('../index')
const LinkedList = L.LinkedList
const ListNode = L.Node

// fast moves two times as fast as slow so when you reach end you know slow is half as far
var middleNode = function({ head }) {
    let slow = head
    let fast = head
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

 // NOTE: on the leetcode version we do not need to destructure the 'head' prop or use the if statements because head is already the node as compared to the course version
 // where we have the prop 'head' that then points to the actual head node. Also the course tests consider the midpoint to be different from the leetcode version when there's
 // an even amount of nodes
// var middleNode = function({ head }) {
//     const array = []
//     let node = head
//     while (node) {
//         array.push(node)
//         node = node.next
//     }
//     if (array.length % 2 === 0)
//         return array[Math.floor(array.length/2) - 1]
//     if (array.length % 1 === 0)
//         return array[Math.floor(array.length/2)]
// }

const l = new LinkedList()
l.insertFirst(1)
l.insertFirst(2)
l.insertFirst(3)
l.insertFirst(4)
l.insertFirst(5)
console.log(middleNode(l))
module.exports = middleNode
