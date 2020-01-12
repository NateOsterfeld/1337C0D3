// Implementation of Node and LinkedList

class Node {
	constructor(val, next = null) {
		this.val = val
		this.next = next
	}
}

class LinkedList {
	constructor() {
		this.head = null
	}

	insertFirst(val) {
		this.head = new Node(val, this.head)
	}

	size() {
		let counter = 0
		let node = this.head

		while (node) {
			counter++
			node = node.next
		}

		return counter
	}

	convertToArray() {
		const array = []
		let node = this.head

		while (node) {
			array.push(node.val)
			node = node.next
		}

		return array
	}

	getFirst() {
		return this.head
	}

	getLast() {
		if (!this.head) {
			return null
		}

		let node = this.head
		while (node) {
			if (!node.next) {
				return node
			}
			node = node.next
		}
	}

	clear() {
		this.head = null
	}

	removeFirst() {
		if (!this.head) {
			return
		}

		this.head = this.head.next
	}

	removeLast() {
		if (!this.head) {
			return
		}

		if (!this.head.next) {
			this.head = null
			return
		}

		let previous = this.head
		let node = this.head.next
		while (node.next) {
			previous = node
			node = node.next
		}
		previous.next = null
	}

	insertLast(val) {
		const last = this.getLast()

		if (last) {
			// There are some existing nodes in our chain
			last.next = new Node(val)
		} else {
			// The chain is empty!
			this.head = new Node(val)
		}
	}

	getAt(index) {
		let counter = 0
		let node = this.head
		while (node) {
			if (counter === index) {
				return node
			}

			counter++
			node = node.next
		}
		return null
	}

	removeAt(index) {
		if (!this.head) {
			return
		}

		if (index === 0) {
			this.head = this.head.next
			return
		}

		const previous = this.getAt(index - 1)
		if (!previous || !previous.next) {
			return
		}
		previous.next = previous.next.next
	}

	insertAt(val, index) {
		if (!this.head) {
			this.head = new Node(val)
			return
		}

		if (index === 0) {
			this.head = new Node(val, this.head)
			return
		}

		const previous = this.getAt(index - 1) || this.getLast()
		const node = new Node(val, previous.next)
		previous.next = node
	}

	forEach(fn) {
		let node = this.head
		let counter = 0
		while (node) {
			fn(node, counter)
			node = node.next
			counter++
		}
	}

	*[Symbol.iterator]() {
		let node = this.head
		while (node) {
			yield node
			node = node.next
		}
	}
}

module.exports = { Node, LinkedList }
