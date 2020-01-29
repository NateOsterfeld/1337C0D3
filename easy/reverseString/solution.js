/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => s.forEach((val, i) => s.splice(i, 0, s.pop()))

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
module.exports = reverseString

// Explanation: iterate through 's' array, 'pop' last item and use it to insert it back into array for the index that is the iteration
//				this lets you take the last item and put it in front, then in front of that, and so on..
//				h e l l o
//				[o @ 0] [o] h e l l
//				[l @ 1] o [l] h e l
//				[l @ 2] o l [l] h e
//				[e @ 3] o l l [e] h
//				[h @ 4] o l l e [h] (this line is technically redundant, but loop is complete)

// alt solution - different syntax
/*
var reverseString = function(s) {
	for (let i = 0; i < s.length; i++) {
		let last = s.pop()
		s.splice(i, 0, last)
	}
}
*/
