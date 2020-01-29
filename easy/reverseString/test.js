// const reverseString = require('./index')
const reverseString = require('./solution')

test('["h", "e", "l", "l", "o"]', () =>
    expect(testReverseString(['h','e','l','l','o'])).toEqual(['o', 'l', 'l', 'e', 'h']))

function testReverseString(s) {
    reverseString(s)
    return s
}
