// const moveZeroes = require('./index')
const moveZeroes = require('./solution')

test('[0,1,0,3,12]', () =>
    expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0]))

test('[0,0,1]', () =>
    expect(moveZeroes([0,1,0])).toEqual([1,0,0]))
