/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
	let result = 0
	for (let num of nums) {
		if (num.toString().length % 2 === 0) result++
	}
	return result
}

// console.log(findNumbers([12, 345, 2, 6, 7896])) // 2
module.exports = findNumbers
