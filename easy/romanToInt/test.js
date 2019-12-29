// const romanToInt = require('./index')
const romanToInt = require('./solution')

test('calculates correct value for III', () =>
    expect(romanToInt('III')).toEqual(3))

test('calculates correct value for IV', () =>
    expect(romanToInt('IV')).toEqual(4))

test('calculates correct value for IX', () =>
    expect(romanToInt('IX')).toEqual(9))

test('calculates correct value for LVIII', () =>
    expect(romanToInt('LVIII')).toEqual(58))
// Explanation: L = 50, V= 5, III = 3.

test('calculates correct value for MCMXCIV', () =>
expect(romanToInt('MCMXCIV')).toEqual(1994))
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

