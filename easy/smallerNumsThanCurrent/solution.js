/* How Many Numbers Are Smaller Than the Current Number
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]. Return the answer in an array.

Example 1:
    Input: nums = [8,1,2,2,3]
    Output: [4,0,1,1,3]
    Explanation: 
    For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
    For nums[1]=1 does not exist any smaller number than it.
    For nums[2]=2 there exist one smaller number than it (1). 
    For nums[3]=2 there exist one smaller number than it (1). 
    For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:
    Input: nums = [6,5,4,8]
    Output: [2,1,0,3]

Example 3:
    Input: nums = [7,7,7,7]
    Output: [0,0,0,0]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count = {}, res = []
    let sortedNums = mergeSort(nums)
    
    for (let i=sortedNums.length-1; i >= 0; i--) {
        count[sortedNums[i]] = i
    }
    
    for (let n of nums) {
        res.push(count[n])
    }
    
    return res
};

function merge(a1,a2) {
    let i = j = 0, res = []
    while (i < a1.length || j < a2.length)
        if (a1[i] < a2[j] || a2[j] == null)
            res.push(a1[i]) && i++
        else
            res.push(a2[j]) && j++
    return res
}

function mergeSort(nums) {
    if (nums.length == 1) return nums
    
    let m = Math.floor(nums.length/2)
    let l = mergeSort(nums.slice(0,m))
    let r = mergeSort(nums.slice(m))
    
    return merge(l,r)
}

smallerNumbersThanCurrent([8,1,2,2,3]) // [4,0,1,1,3]