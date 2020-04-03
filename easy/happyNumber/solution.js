/* Happy Number
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum 
of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in
a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:
    Input: 19
    Output: true
    Explanation: 
        1^2 + 9^2 = 82
        8^2 + 2^2 = 68
        6^2 + 8^2 = 100
        1^2 + 0^2 + 0^2 = 1
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = (n, map = {}) => n == 1 ? true : map[n] ? false : isHappy([...n.toString()].reduce((sum, num) => map[n] = n && sum + num**2, 0), map)

var isHappy = (n, map = {}) =>
    n == 1
        ? true
        : map[n]
            ? false
            : isHappy([...n.toString()].reduce((sum, num) => map[n] = n && sum + num ** 2, 0), map)

    
var isHappy = (n, map = {}) => {
    if (n == 1) return true
    if (map[n]) return false
    map[n] = n

    return isHappy([...n.toString()].reduce((sum, num) => sum + num**2, 0), map)
}

isHappy(19) // true
isHappy(25) // false