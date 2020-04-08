/* Counting Elements
Given an integer array arr, count element x such that x + 1 is also in arr.
If there're duplicates in arr, count them seperately.

Example 1:
    Input: arr = [1,2,3]
    Output: 2
    Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

Example 2:
    Input: arr = [1,1,3,3,5,5,7,7]
    Output: 0
    Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

Example 3:
    Input: arr = [1,3,2,3,5,0]
    Output: 3
    Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.

Example 4:
    Input: arr = [1,1,2,2]
    Output: 2
    Explanation: Two 1s are counted cause 2 is in arr.

Example 5:
    Input: arr = [1,2,1]
    Output: 2

Constraints:
    1 <= arr.length <= 1000
    0 <= arr[i] <= 1000
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
	let map = {},
		res = 0

	for (n of arr) map[n] = ~~map[n] + 1

	for (n in map) res += map[+n + 1] ? map[n] : 0

	return res
}

var countElements = arr =>
	Array.from(
		arr.reduce(
			(map, n) =>
				map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1),
			new Map(),
		),
	).reduce(
		(res, v, i, arr) =>
			res +
			(Object.fromEntries(arr)[v[0] + 1]
				? Object.fromEntries(arr)[v[0]]
				: 0),
		0,
	)

var countElements = arr =>
	Array.from(
		arr.reduce(
			(map, n) =>
				map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1),
			new Map(),
		),
	).reduce(
		(res, v, i, arr) =>
			res +
			(Object.fromEntries(arr)[v[0] + 1]
				? Object.fromEntries(arr)[v[0]]
				: 0),
		0,
	)
