/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
	let freq = null
	let res = []

	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) freq = nums[i]

		if (i % 2 === 1) res.push(...Array(freq).fill(nums[i]))
	}

	return res
}

console.log(decompressRLElist([1, 2, 3, 4])) // [2,4,4,4]
console.log(decompressRLElist([2, 3, 5, 4, 5, 9])) // [3,3,4,4,4,4,4,9,9,9,9,9]
module.exports = decompressRLElist

// Explanation: because we are only concerned with every 2 nums in our array, and because we need to do something different for each num in the pairs...
//              we can use a modulo to select if the current num in our iteration is either the first or second
//              if it's the first, then we want to assign that num to be our 'frequency'
//              if it's the second, then we want to use that as our 'value', which we will create an array out of using our frequency
//              and because we want these to be flat when we return, we can push the array to the results array using the spread operator
