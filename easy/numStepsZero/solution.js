/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let i = 0
    while (num !== 0) {
        if (num % 2 !== 0) {
            num--
            i++
            if (num === 0) return i
        }
        num /= 2
        i++
    }
    return i
};