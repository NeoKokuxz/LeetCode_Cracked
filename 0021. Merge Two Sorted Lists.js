/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    res = { val: -1, next: null};
    currentHead = res;

    // While L1 and L2 is not empty
    while(list1 && list2) {
        // Put L1 
        if(list1.val <= list2.val) {
            currentHead.next = list1;
            list1 = list1.next;
        } else {
            // Put L2
            currentHead.next = list2
            list2 = list2.next;
        }
        //Move currentHead to next
        currentHead = currentHead.next;
    }

    if(list1) {
        currentHead.next = list1
    } else if(list2){
        currentHead.next = list2
    }
    return res.next;
};
