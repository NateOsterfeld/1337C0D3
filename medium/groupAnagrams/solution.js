/* Group Anagrams
Given an array of strings, group anagrams together.

Example:
    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
      ["ate","eat","tea"],
      ["nat","tan"],
      ["bat"]
    ]
Note:
    All inputs will be in lowercase.
    The order of your output does not matter
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}

    for (let str of strs) {
        let key = [...str].sort().join()
        map[key] = map[key] ? [...map[key], str] : [str]
    }

    return Object.values(map)
}

var groupAnagrams = function(strs) {
    let map = new Map()
    
    for(str of strs) {
        let key = 0;
        for (let char of str) {
            const i = char.charCodeAt(0) 
            key += i**4
        }

        !map.has(key) 
            ? map.set(key, [str])
            : map.set(key, map.get(key).concat(str))
    }

    return Array.from(map.values())
};