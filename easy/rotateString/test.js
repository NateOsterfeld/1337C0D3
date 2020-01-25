// const rotateString = require('./index')
const rotateString = require('./solution')

test('abcde and cdeab', () =>
	expect(rotateString('abcde', 'cdeab')).toEqual(true))

test('abcde and abced', () =>
	expect(rotateString('abcde', 'abced')).toEqual(false))

