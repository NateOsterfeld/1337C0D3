/* Group The People Given The Group Size They Belong To
There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group. Given the array groupSizes of length n telling the group size each 
person belongs to, return the groups there are and the people's IDs each group includes.
You can return any solution in any order and the same applies for IDs. Also, it is guaranteed that there exists at least one solution. 

Example 1:
    Input: groupSizes = [3,3,3,3,3,1,3]
    Output: [[5],[0,1,2],[3,4,6]]
    Explanation: 
    Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

Example 2:
    Input: groupSizes = [2,1,3,3,3,2]
    Output: [[1],[0,5],[2,3,4]]
*/

function groupThePeople(groupSizes) {
    const groups = {}, curr = {}

    for (let id = 0; id < groupSizes.length; id++) {
        if (!groups[groupSizes[id]]) {
            groups[groupSizes[id]] = []
            groups[groupSizes[id]].push([id])
            curr[groupSizes[id]] = 0
        }
        else {
            if (groups[groupSizes[id]][curr[groupSizes[id]]].length < groupSizes[id]) {
                groups[groupSizes[id]][curr[groupSizes[id]]].push(id)
            }
            else {
                groups[groupSizes[id]].push([id])
                curr[groupSizes[id]]++
            }
        }
    }

    // use concat instead of push bc push returns the element instead of the array like concat does. or make it multi-line and return acc after pushing.
    return Object.values(groups).reduce((acc, group) => acc.concat([...group]))
}


console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3])) // [ [ 5 ], [ 0, 1, 2 ], [ 3, 4, 6 ] ]
