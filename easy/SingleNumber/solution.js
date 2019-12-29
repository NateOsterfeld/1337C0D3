// reads like english
const singleNumber = nums => {
    const set = new Set()
    for (const num of nums) {
        if (set.has(num)) {
            set.delete(num)
        } else {
            set.add(num)
        }
    }
    return Array.from(set)[0]
}

// check if property exists on map for current num, if it doesn't give it a 'count' of 1 on map and add it to 'result' array. 
// Then for each time a num comes up again (if it has a count of 1 already) we can remove it from the 'result' array
// This way the only number left will be the one that didn't show up more than once
// const singleNumber = nums => {
// 	const result = []
// 	nums.reduce((map, curr, i) => {
// 		if (!map[curr]) {
// 			map[curr] = 1
// 			result.push(curr)
// 		} else if (map[curr] === 1) {
// 			result.splice(result.indexOf(curr), 1)
// 		}
// 		return map
// 	}, {})

// 	return result[0]
// }

module.exports = singleNumber
