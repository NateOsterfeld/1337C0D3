const findNumbers = require('./index')
const findNumbers = require('./solution')

test('findNumbers', () => {
    expect(findNumbers([12, 345, 2, 6, 7896]).toEqual(2))
})
