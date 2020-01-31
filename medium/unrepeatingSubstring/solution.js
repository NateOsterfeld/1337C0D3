/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let curArr = []; let curMap = {}; let res = 0;

    for (let i = 0; i < s.length; i++) {
        
        let c = s[i]
        
        if (!(c in curMap)) {
            
            curArr.push(c); curMap[c] = i;
            
        } else {
            
            res = curArr.length > res ? curArr.length : res

            i = curMap[c]
            
            curArr = []; curMap = {};
            
        }
    }

    res = curArr.length > res ? curArr.length : res

    return res
}

module.exports = lengthOfLongestSubstring

// Explanation: Loop through string, using a hashmap to keep track of frequency, and an array to keep track of length once a 
// character is repeated.If a character is repeated, reset i(index) back to wherever the first occurrence of the repeated character
// was, and then start again with a brand new array and hashmap(comparing array length values each time)

// with comments:
var _lengthOfLongestSubstring = function(s) {
	// we'll use array to keep track of pointers and length, map for frequency of chars, and res for result of longest
    let curArr = []; let curMap = {}; let res = 0;

	for (let i = 0; i < s.length; i++) {
		// c will be the current character
		let c = s[i]

		// if c is not in our current map..
		if (!(c in curMap)) {
			// add it to our array, as well as our map with the value being the index
			curArr.push(c)
			curMap[c] = i

			// if c is in our map, we know it's been repeated
		} else {
			// use our array to see if it's larger than our past array lengths, adding it if it is
			res = curArr.length > res ? curArr.length : res

			// reset i to the map value of the repeated character (since it represents the index of the first time it occurred)
			i = curMap[c]

			// reset array and map back to an empty state, and start again where the last one started, but +1 when 'i' gets incremented
            curArr = []; curMap = {};
		}
	}

	// check final array length after loop ends
	res = curArr.length > res ? curArr.length : res

	// return length of longest substring without repeating characters
	return res
}
