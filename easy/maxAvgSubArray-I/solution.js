/* Maximum Average Subarray I
Given an array consisting of n integers, find the contiguous subarray of given length k that has the 
maximum average value. And you need to output the maximum average value.

Example 1:
    Input: [1,12,-5,-6,50,3], k = 4
    Output: 12.75
    Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 

Note:
    1 <= k <= n <= 30,000.
    Elements of the given array will be in the range [-10,000, 10,000].
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let res = nums.slice(0,k).reduce((a,b) => a+b)/k
    let curr = res
    
    for (let i=0; i+k < nums.length; i++) {
        curr = curr - nums[i]/k + nums[i+k]/k
        res = Math.max(res, curr)        
    }

    return res
};

findMaxAverage([1,12,-5,-6,50,3], 4) // 12.75
findMaxAverage([0,4,0,3,7], 1) // 4
findMaxAverage([0,4,0,3,9], 1) // 9

