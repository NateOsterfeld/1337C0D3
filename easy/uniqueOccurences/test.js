// const uniqueOccurrences = require('./index')
const uniqueOccurrences = require('./solution')

test('[1,2,2,1,1,3]', () =>
	expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toEqual(true))

test('[1, 2]', () =>
    expect(uniqueOccurrences([1, 2])).toEqual(false))
