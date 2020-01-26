// const balancedStringSplit = require('./index')
const balancedStringSplit = require('./solution')

test('RLRRLLRLRL', () =>
	expect(balancedStringSplit('RLRRLLRLRL')).toEqual(4))

test('RLLLLRRRLR', () =>
    expect(balancedStringSplit('RLLLLRRRLR')).toEqual(3))
