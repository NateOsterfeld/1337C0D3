const L = require('../index')
const LinkedList = L.LinkedList

// Because we don't have access to any of the nodes before the node we're given... 
// we take the node after its value with 'node.next.val' and then also its next val with 'node.next.next'

var deleteNode = function(node) {
	node.val = node.next.val
    node.next = node.next.next
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
