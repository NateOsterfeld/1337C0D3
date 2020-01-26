// const decompressRLElist = require('./index')
const decompressRLElist = require('./solution')

test('[1,2,3,4]', () => 
    expect(decompressRLElist([1,2,3,4])).toEqual([2,4,4,4]))

test('[2,3,5,4,5,9]', () =>
	expect(decompressRLElist([2,3,5,4,5,9])).toEqual([3,3,4,4,4,4,4,9,9,9,9,9]),
)
