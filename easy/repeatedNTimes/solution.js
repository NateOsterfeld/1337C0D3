/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
	const map = {}
	for (i of A) {
		map[i] = ++map[i] || 1
		if (map[i] === A.length / 2) {
			return i
		}
	}
}

// Explanation: use a hashmap to keep track of how many times each number has appeared. if a number appears that has been repeated 2N more than the others aka half the length, return
module.exports = repeatedNTimes
