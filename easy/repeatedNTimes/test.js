// const repeatedNTimes = require('./index')
const repeatedNTimes = require('./solution')

test('[1,2,3,3]', () =>
	expect(repeatedNTimes([1, 2, 3, 3])).toEqual(3))

test('[5,1,5,2,5,3,5,4]', () =>
	expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toEqual(5))
