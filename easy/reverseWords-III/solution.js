/* Reverse Words In a String III
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
    Input: "Let's take LeetCode contest"
    Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = s => !s.length ? s : s.split(' ').reduce((res, word) => [...res, [...word].reduce((acc, ch) => ch + acc)], '').join(' ')

var reverseWords = s =>
    !s.length
        ? s
        : s.split(' ')
            .reduce((res, word) => [...res, [...word].reduce((acc, ch) => ch + acc)], '')
            .join(' ')

var reverseWords = function(s) {
    if (!s.length) return s
    let res = []
    s = s.split(' ')
 
    for (let word of s)
        res.push([...word].reduce((acc, ch) => ch + acc))
 
    return res.join(' ')
}

reverseWords("Let's take LeetCode contest")
