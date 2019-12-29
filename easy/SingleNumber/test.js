// const singleNumber = require('./index')
const singleNumber = require('./solution')

test('input: [2, 2, 1]', () =>
    expect(singleNumber([2, 2, 1])).toEqual(1))

test('input: [4, 1, 2, 1, 2]', () =>
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4))
