/* Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
    Input: "A man, a plan, a canal: Panama"
    Output: true

Example 2:
    Input: "race a car"
    Output: false

Example 3:
    Input: "0P"
    Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	if (!s.length) return true

	let i = 0,
		j = s.length - 1

	while (i < j) {
		let si = s[i].toLowerCase()
		let sj = s[j].toLowerCase()

		if (!si.match(/^[a-z0-9]+$/i)) i++
		else if (!sj.match(/^[a-z0-9]+$/i)) j--
		else if (si !== sj) return false
		else {
			i++
			j--
		}
	}

	return true
}

isPalindrome('A man, a plan, a canal: Panama') // true
isPalindrome('0P') // false
