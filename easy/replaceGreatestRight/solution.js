/* Replace Elements with Greatest Element on Right Side
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
After doing so, return the array.

Example 1:
    Input: arr = [17,18,5,4,6,1]
    Output: [18,6,6,6,1,-1]
 

Constraints:
    1 <= arr.length <= 10^4
    1 <= arr[i] <= 10^5
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = (arr, curr = -1) => 
    arr.reduceRight((res, n, i, a) => [a[i], curr, res] = curr > a[i] ? [curr, curr, a] : [curr, a[i], a], arr[arr.length-1])[2]

var replaceElements = (arr, curr = -1) => 
    arr.reduceRight((res, n, i, a) => 
        [a[i], curr, res] = curr > a[i] 
            ? [curr, curr, a] 
            : [curr, a[i], a], arr[arr.length-1])[2]

var replaceElements = function(arr, curr = -1) {
    for (let i = arr.length - 1; i >= 0; i--)
        if (curr > arr[i]) arr[i] = curr
        else [arr[i], curr] = [curr, arr[i]]
    
    return arr
};

var replaceElements = function(arr) {
    let currNum = arr.splice(-1, 1, -1)
    
    for (let i = arr.length - 2; i >= 0; i--) {
        if (currNum > arr[i]) {
            arr[i] = currNum
        } else if (arr[i] > currNum) {
            let prev = arr[i]
            arr[i] = currNum
            currNum = prev
        }
    }
    
    return arr
};
