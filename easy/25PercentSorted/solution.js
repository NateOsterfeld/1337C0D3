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

// Explanation: So all we're really doing is storing each number in our array in a map (called 'freq'), and incrementing
// the value for that number by 1 every time it comes up.Once one of our numbers can be seen to have come up 25 % of the time,
// by checking if it is greater than our array's length / 4, we know to go ahead and return that number immediately after.
