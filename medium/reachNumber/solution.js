/* Reach A Number
You are standing at position 0 on an infinite number line. There is a goal at position target.
On each move, you can either go left or right. During the n-th move (starting from 1), you take n steps.
Return the minimum number of steps required to reach the destination.

Example 1:
    Input: target = 3
    Output: 2
    Explanation:
    On the first move we step from 0 to 1.
    On the second step we step from 1 to 3.

Example 2:
    Input: target = 2
    Output: 3
    Explanation:
    On the first move we step from 0 to 1.
    On the second move we step  from 1 to -1.
    On the third move we step from -1 to 2.

Note: target will be a non-zero integer in the range [-10^9, 10^9].
*/
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    if (target < 0) target *= -1
    let pos = 0
    for (let i = 1; pos !== target; i++)
        if (pos + i < target)
            pos += i
        else if (pos + i == target)
            return i
        else if (pos + i > target)
            if ((pos + i - target) % 2 !== 0)
                pos += i
            else if ((pos + i - target) % 2 == 0)
                return i
            
};

reachNumber(5) // 5
reachNumber(8) // 4
reachNumber(7) // 5

// Explanation: Keep adding 'to the right' until you either hit the target or pass it. If you pass it and the difference
// between the target and that position is even, then we know we can take one of our numbers and 'reverse' it or subtract it
// to get to our target so return that position. If, however, the difference is odd, then we have to keep going