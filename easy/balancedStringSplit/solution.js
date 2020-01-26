/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0
    let arrL = []; let arrR = [];

    for (let c of s) {
        if (c === 'L')
            arrL.push(c)
        
        if (c === 'R')
            arrR.push(c)
        
        if (arrL.length === arrR.length)
            ++count
    }

    return count
}

module.exports = balancedStringSplit

// Explanation: loop through string adding each 'L' char and 'R' char to their respective arrays. Anytime the lengths match up, we know they've balanced out
