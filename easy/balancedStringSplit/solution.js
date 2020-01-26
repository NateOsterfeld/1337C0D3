/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    res = cnt = 0
    for (c of s) {
        cnt += c == 'L'
        cnt -= c == 'R'
        res += cnt == 0
    }
    return res
}

console.log(balancedStringSplit('RLRRLLRLRL')) // 4
module.exports = balancedStringSplit

// Explanation: Because 1 is True and 0 is False in the context of 'numbers -> booleans', True is 1 and False is 0 in the context of 'booleans -> numbers'
//              So kind of like a stack, we can add to or substract from count, in the same way we would add to a stack
//              Anytime a string of L's appear we increment count, then when an even number of R's appear we decrement count
//              And anytime count is 0 or our stack is 'empty', we know we've completed an even set of L's and R's


/* Easy Solution
var balancedStringSplit = function(s) {
    let count = 0
    let arrL = []
    let arrR = []

    for (let c of s) {
            if (c === 'L') arrL.push(c)
    
            if (c === 'R') arrR.push(c)
    
            if (arrL.length === arrR.length) ++count
        }
    
        return count
    }
*/      
// Explanation: loop through string adding each 'L' char and 'R' char to their respective arrays. Anytime the lengths match up, we know they've balanced out
