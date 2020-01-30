/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
	const freq = {}

	for (i of arr) {
		freq[i] = (freq[i] || 0) + 1

		if (freq[i] > arr.length / 4) return i
	}
}
