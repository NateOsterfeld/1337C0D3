/* Array Partition I
Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
    Input: [1,4,3,2]
    Output: 4
    Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

Note:
    n is a positive integer, which is in the range of [1, 10000].
    All the integers in the array will be in the range of [-10000, 10000].
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let res = 0
    nums = mergeSort(nums)
    
    for (let i=0; i < nums.length; i+=2)
        res += Math.min(nums[i],nums[i+1])
    
    return res
};

const merge = (a1, a2) => {
    let res = [], p1 = p2 = 0;
    
    while (res.length < (a1.length + a2.length))
        if (a2[p2] === undefined || a1[p1] < a2[p2])
            res.push(a1[p1]) && p1++
        else
            res.push(a2[p2]) && p2++
    
    return res
}

const mergeSort = nums => {
    if (nums.length <= 1) return nums
    
    let m = Math.floor(nums.length/2)
    let l = mergeSort(nums.slice(0,m))
    let r = mergeSort(nums.slice(m))
    
    return merge(l,r)
}