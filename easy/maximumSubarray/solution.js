/* Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.

Follow up:
    If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarray = function(nums) {
	let res = (curr = nums[0])

	for (let n of nums.slice(1)) {
		curr += n

		if (n > curr) {
			curr = n
			if (n > res) {
				res = n
			}
		} else if (curr > res) {
			res = curr
		}
	}

	return res
}

maxSubarray([1, 2]) // 3
maxSubarray([[-2, 1, -3, 4, -1, 2, 1, -5, 4]]) // 6
