/**
 * @param {number[]} A
 * @return {number}
 */

// recursive binary search
const peakIndexInMountainArray = (A, low = 0, high = A.length - 1) => {
	if (!A.length) return -1

	const mid = ((low + high) / 2) | 0

	if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) return mid

	if (A[mid] < A[mid - 1]) return peakIndexInMountainArray0(A, low, mid)

	if (A[mid] < A[mid + 1]) return peakIndexInMountainArray0(A, mid, high)
}

module.exports = peakIndexInMountainArray

// Explanation:
// Here we add optional arguments low and high as a way for us to keep track of the initial low and high values. low is initially 0, and high is A.length -. A recursive solution can be one intuitive way of solving this since we're repeating steps for smaller parts of the array. It may also provide a readalbe solution that's easy to understand.

// 1. If the array is empty, return -1 since there's nothing to search
// 2. Find the midpoint of the array with the distance formula (low + high) / 2 and then truncate the decimal using Bitwise OR:
const mid = ((low + high) / 2) | 0
// 3. If the midpoint is greater than the previous number AND if the midpoint's greater than the next number we found the peak. This would be our base case, which is where we'll stop making recursive calls to the function.
if (A[mid] > A[mid - 1] && A[mid] > A[mid + 1]) return mid
// 4. If it's less than the previous number, we'll search the lower half recursively with mid becoming the new high point:
if (A[mid] < A[mid - 1]) return peakIndexInMountainArray(A, low, mid)
// 5. If it's less than the next number, we'll search the upper half recursively with mid becoming the new low point:
if (A[mid] < A[mid + 1]) return peakIndexInMountainArray(A, mid, high)

/*              --alt solutions--               */
// when A[i+1] begins to decrease, we know we've reached our peak
var peakIndexInMountainArray0 = function(A) {
	for (let i = 0; i < A.length - 1; i++) {
		if (A[i + 1] < A[i]) {
			return i
		}
	}
}

// JS one-liner
var peakIndexInMountainArray1 = function(A) {
	return A.indexOf(Math.max(...A))
}

// Find index of biggest number
var peakIndexInMountainArray2 = function(A) {
	let peak = 0
	for (let i = 0; i < A.length - 1; i++) {
		if (A[i] > A[peak]) {
			peak = i
		}
	}
	return peak
}
