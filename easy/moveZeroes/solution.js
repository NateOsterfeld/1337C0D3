// Explanation: the reason for using '--i' and '--counted' is because if you dont decrement the i each time, you'll end up skipping the next one because when you take an element
// and move it to the end, wherever that element was, the index that it was represented by and pointed to in the loop will not be pointing to the one that intially came after it
// You need the --count because if you're subtracting i each time you hit a 0, by the time you get to the end it will end up going forever, so by taking the initial length
// of the array and using that to count by instead you can use the actual length, just make sure to subtract counted each time you subtract i or i will always be less
// it's really not that hard but can be confusing to explain i guess
function moveZeroes(nums) {
    let counted = nums.length
    for (let i=0; i < counted; i++) {
        if (nums[i] === 0) {
            let zero = nums.splice(i, 1)
            nums.push(zero[0])
            --i
            --counted
        }
    }

    return nums
};

module.exports = moveZeroes
