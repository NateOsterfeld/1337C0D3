// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = nums => {
    const result = []
    nums.reduce((map, curr, i) => {
        if (!map[curr]) {
            map[curr] = 1
            result.push(curr)
        } else if (map[curr] === 1) {
            result.splice(result.indexOf(curr), 1)
        }
        return map
    }, {})

    return result[0]
}

// singleNumber([2, 2, 1])
// singleNumber([4, 1, 2, 1, 2])
module.exports = singleNumber
