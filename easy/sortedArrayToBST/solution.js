function Node(val) {
    this.val = val
    this.right = this.left = null
}

function sortedArrayToBST(nums) {
    if (!nums.length) return null

    let mid = Math.floor(nums.length/2)
    let node = new Node(nums[mid])
    
    node.left = sortedArrayToBST(nums.slice(0, mid))
    node.right = sortedArrayToBST(nums.slice(mid+1))

    return node
}

console.log(JSON.stringify(sortedArrayToBST([1,2,3,4,5,6,7,8,9]), null, 4))
