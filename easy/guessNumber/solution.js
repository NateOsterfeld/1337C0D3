/* Guess Number Higher or Lower
We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I'll tell you whether the number is higher or lower.
You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

1  : My number is lower
-1 : My number is higher
0  : Congrats! You got it!

Example :
    Input: n = 10, pick = 6
    Output: 6
*/


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	             1 if num is lower than the guess number,
 *			             -1 if num is higher than the guess number,
 *                       otherwise return 0
 */
let pick = 6
var guess = function(num) {
    if (num > pick) return -1
    if (num < pick) return 1
    if (num == pick) return 0
}

/**
 * @param {number} n
 * @return {number}
 */
function guessNumber(n, min = 0, max = n) {
    while (min <= max) {
        let mid = min + Math.floor((max - min) / 2)
        let response = guess(mid)

        if (response == 1) 
            min = mid + 1
        else if (response == -1) 
            max = mid - 1
        else 
            return mid
    }
}

console.log(guessNumber(10))