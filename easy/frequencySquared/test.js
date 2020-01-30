// const freqSquared = require('./index')
const freqSquared = require('./solution')

test('([1,2,3,3], [4,9,1,9])', () =>
	expect(freqSquared([1, 2, 3, 3], [4, 9, 1, 9])).toEqual(true))

test('([1,2,3,3,11], [4,9,1,9])', () =>
	expect(freqSquared([1, 2, 3, 3, 11], [4, 9, 1, 9])).toEqual(false))

test('([1,2,3,3], [4,9,1,9,11])', () =>
	expect(freqSquared([1, 2, 3, 3], [4, 9, 1, 9, 11])).toEqual(false))
