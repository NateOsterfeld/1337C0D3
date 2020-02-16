function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode(0)
    function merge(l, r, res) {
        if (!l && !r) return
        if (!l) {
            res.next = new ListNode(r.val)
            return merge(l, r.next, res.next)
        }
        if (!r) {
            res.next = new ListNode(l.val)
            return merge(l.next, r, res.next)
        }
        
        if (l.val < r.val) {
            res.next = new ListNode(l.val)
            merge(l.next, r, res.next)
        } else {
            res.next = new ListNode(r.val)
            merge(l, r.next, res.next)
        }
    } merge(l1, l2, res)
    
    return res.next
};