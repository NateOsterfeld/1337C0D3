// 852. Peak Index in a Mountain Array - https://leetcode.com/problems/peak-index-in-a-mountain-array/
// Let's call an array A a mountain if the following properties hold:

// A.length >= 3
// There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Example 1:
// Input: [0, 50, 9, 3, 2, 0]
// Output: 1
// Explanation: index 1 because 50 is the highest 'peak' on the 'mountain'
// Basically go until A[i] stops increasing

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {}

module.exports = peakIndexInMountainArray
