/* Add Digits
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:
    Input: 38
    Output: 2 
    Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
                Since 2 has only one digit, return it.
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = num => {
    while (num.toString().length > 1) num = [...num.toString()].reduce((sum, n) => sum + parseInt(n), 0)
    return num
}

// and perhaps a more readable version:
var addDigits = num => {
    while (num.toString().length > 1)
        num = [...num.toString()].reduce((sum, n) =>
            sum + parseInt(n), 0)
			
    return num
}

// trial4's genius solution using 9's property:
var addDigits = function(num) {
	return num % 9 === 0 ? 9 : num % 9
}
