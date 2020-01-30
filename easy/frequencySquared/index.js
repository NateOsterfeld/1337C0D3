/*
Write a function that accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of which these values occur must also be the same.

Example 1:
Input: arr1 = [1,2,3,3]; arr2 = [4,9,1,9]
Output: true
Explanation: Evaluates to true because for every number in arr1 there is a corresponding value of it in arr2 that has been squared
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {boolean}
 */
const freqSquared = (arr1, arr2) => {
}

// console.log(freqSquared([1,2,3,3], [4,9,1,9])) // true
// console.log(freqSquared([1,2,3,3,11], [4,9,1,9])) // false
// console.log(freqSquared([1,2,3,3], [4,9,1,9,11])) // false

module.exports = freqSquared
