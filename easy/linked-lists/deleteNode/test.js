// const testDeleteNode = require('./index')
const deleteNode = require('./solution')
const L = require('../index')
const LinkedList = L.LinkedList

var testDeleteNode = (list, i) => {
	deleteNode(list.getAt(i))
	list = list.convertToArray()
	return list
}

describe('deleteNode', () => {
    test('deleteNode is a function', () => {
        expect(typeof deleteNode).toEqual('function')
    })

	test('delete second node in list', () => {
		const l = new LinkedList()
		l.insertLast(4)
		l.insertLast(5)
		l.insertLast(1)
		l.insertLast(9)
		expect(testDeleteNode(l, 1)).toEqual([4,1,9])
	})

	test('delete third node in list', () => {
		const l = new LinkedList()
		l.insertLast(4)
		l.insertLast(5)
		l.insertLast(1)
		l.insertLast(9)
		expect(testDeleteNode(l, 2)).toEqual([4,5,9])
	})
})

