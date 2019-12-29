// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    let result = []
    for (let i=0; i < l1.length; i++) {
        result.push(l1[i], l2[i])
    }
    console.log('result', result)
}

mergeTwoLists([1,2,4], [1,3,4])
module.exports = mergeTwoLists
