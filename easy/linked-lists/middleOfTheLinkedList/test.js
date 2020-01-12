// const middleNode = require('./index')
const middleNode = require('./solution')
const L = require('../index')
const LinkedList = L.LinkedList
const Node = L.Node

test('Midpoint is a function', () => {
	expect(typeof middleNode).toEqual('function')
})

describe('Midpoint returns the middle node of an odd numbered list', () => {
	test('when the list has 3 elements', () => {
		const l = new LinkedList()
		l.insertLast('a')
		l.insertLast('b')
		l.insertLast('c')
		expect(middleNode(l).val).toEqual('b')
	})

	test('when the list has 5 elements', () => {
		const l = new LinkedList()
		l.insertLast('a')
		l.insertLast('b')
		l.insertLast('c')
		l.insertLast('d')
		l.insertLast('e')
		expect(middleNode(l).val).toEqual('c')
	})
})

describe('Midpoint returns the middle node of an even numbered list', () => {
	test('when the list has 2 elements', () => {
		const l = new LinkedList()
		l.insertLast('a')
		l.insertLast('b')
		expect(middleNode(l).val).toEqual('a')
	})

	test('when the list has 4 elements', () => {
		const l = new LinkedList()
		l.insertLast('a')
		l.insertLast('b')
		l.insertLast('c')
		l.insertLast('d')
		expect(middleNode(l).val).toEqual('b')
	})
})
