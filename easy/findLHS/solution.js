/* Longest Harmonious Sequence
We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.
Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:
    Input: [1,3,2,2,5,2,3,7]
    Output: 5
    Explanation: The longest harmonious subsequence is [3,2,2,2,3].

Note: The length of the input array will not exceed 20,000.

/**
 * @param {number[]} nums
 * @return {number}
 */

var findLHS = function(nums) {
    let map = {}, res = 0
    
    for (let n of nums)
        map[n] = ~~map[n] + 1
    
    for (let n in map)
        if (map[+n+1])
            res = Math.max(res, map[n] + map[+n+1])
    
    return res  
};

/* alt sol - mostly same idea */
// var findLHS = function(nums) {
//     let map = {}, seqs = {}, res = 0
    
//     for (let n of nums)
//         map[n] = n
    
//     for (let n of nums) {
//         if (map[n+1] || map[n+1] == 0) {
//             seqs[n] = !seqs[n] ? [n] : [...seqs[n], n]
//         }
//         if (map[n-1] || map[n-1] == 0) {
//             seqs[n-1] = !seqs[n-1] ? [n] : [...seqs[n-1], n]
//         }
//     }
    
//     for (let s in seqs) {
//         res = Math.max(res, seqs[s].length)
//     }
    
//     return res
    
// };

findLHS([-1,0,-1,0,-1,0,-1]) // 7
findLHS([1,3,2,2,5,2,3,7]) // 5
