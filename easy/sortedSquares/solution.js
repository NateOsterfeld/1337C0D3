/* Squares of a Sorted Array
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
    Input: [-4,-1,0,3,10]
    Output: [0,1,9,16,100]

Example 2:
    Input: [-7,-3,2,3,11]
    Output: [4,9,9,49,121]

Note:
    1 <= A.length <= 10000
    -10000 <= A[i] <= 10000
    A is sorted in non-decreasing order.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
function sortedSquares(A) {
    let l = 0, r = A.length - 1, res = [];

    for (let i = A.length - 1; i >= 0; i--) {
        res[i] = Math.max(A[l]**2, A[r]**2)
        res[i] == A[l]**2 ? l++ : r--
    }

    return res
}

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let l = 0; let r = A.length - 1;
    let res = []
    
    for (let i = A.length-1; i >= 0; i--) {
        if (A[l]**2 > A[r]**2) {
            res[i] = A[l]**2
            l++
        } else {
            res[i] = A[r]**2
            r--
        }
    }
    
    return res
}
