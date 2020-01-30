/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {}
    let unique = []
    let res = true

	for (let n of arr) {
		map[n] = ++map[n] || 1
    }
    
    Object.values(map).map(n => {
		if (!unique.includes(n)) {
            unique.push(n)
        } else {
            res = false
        }

	})

	return res
}

// Explanation: Use hashmap to count how many times each number appears, then loop through those values checking to see if any are repeated by adding each to an array as long as
// that value doesn't already exist in the array from before. If it does then we know we have a repeated value and can return false.
// Note: Could also use the same method used in the first half of the problem again by adding values to a map instead of an array, and if a number comes up that already exists
// in the map, then return false like we did with the array. Could not use second method first, though, because we need a map to know which values have repeated and how many times
// before we can check to see if those values themselves have repeated

module.exports = uniqueOccurrences

// alt solution
var uniqueOccurrences0 = function(arr) {
	const freq = {}
	for (const val of arr) {
		freq[val] = (freq[val] || 0) + 1
	}
	return Object.keys(freq).length === new Set(Object.values(freq)).size
}

// Explanation: same as first at beginning, create map of frequency of vals. then here we create a Set out of the map values and compare the size of it to the num of keys we had
// bc a Set can only have unique values, we know that if none of the values were discarded, they should match up with their original keys, otherwise they were discarded and
// therefore contained repeat values
