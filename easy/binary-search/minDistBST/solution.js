const TreeNode = require('./treeNode')

const minDiffInBST = root => {
    const list = inOrder(root, [])
    let min = Infinity
    for (let i = 1; i < list.length - 1; i++) {
        min = Math.min(min, list[i] - list[i-1])
    }
    return min
}

const inOrder = (curr, list) => {
    if (!curr) return
    
    inOrder(curr.left, list)
    list.push(curr.val)
    inOrder(curr.right, list)

    return list
}

const bst = new TreeNode(4)
bst.insert(2)
bst.insert(6)
bst.insert(1)
bst.insert(4)
// console.log(JSON.stringify(bst, null, 2))
console.log(minDiffInBST(bst)) // 1

module.exports = minDiffInBST

// Explanation:
// Because we have a binary search tree, we can write a function 'inOrder' to turn our tree into a sorted/in-order array
// after we have our sorted array we can loop through it, subtracting each element from the one before it, giving us all the differences
// then by doing this within the 'Math.min' library function, we can compare each difference with the curr min, adopting it as our new min if it's smaller

const minDiffInBST0 = root => {
    // turn bst into sorted array
    const list = inOrder(root, [])
    
    // set min to Infinity as a base comparison
    let min = Infinity
    
    // loop through list, comparing and setting min values when we find them
	for (let i = 1; i < list.length - 1; i++) {
		min = Math.min(min, list[i] - list[i - 1])
    }
    
    // return min value once loop has ended
	return min
}

// recursively traverse bst, returning a sorted array
const inOrder0 = (curr, list) => {
    // if there is no 'curr.left' or 'curr.right', return out of function
	if (!curr) return

    // traverse down left side, depth first, until we reach branches end
    inOrder(curr.left, list)
    
    // once we reach end of branch, push value, and look to right
    list.push(curr.val)
    
    // once we reach right, look left until no more, break out, repeat
	inOrder(curr.right, list)

    // return sorted array
	return list
}

/*          --alt solutions--           */

// using reduce.. set i = 1 if 0 to stay in bounds
const minDiffInBST1 = root => {
    const list = inOrder(root, [])
    return list.reduce((min, val, i) => {
        i = i === 0 ? 1 : i
        return Math.min(min, list[i] - list[i-1])
    }, Infinity)
}
