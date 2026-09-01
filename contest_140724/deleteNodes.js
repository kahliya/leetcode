// 100368. Delete Nodes From Linked List Present in Array
// You are given an array of integers nums and the head of a linked list. 
// Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

// Better solution @ 
// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5473212/solution-by-dare2solve-detailed-explanation-clean-code/

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var modifiedList = function(nums, head) {
    nums = new Set(nums);

    // Find the head first
    while (head != null) {
        if (nums.has(head.val)) {
            head = head.next;
        } else {
            break;
        }
    }

    // Find the rest
    prev = head;
    ptr = prev.next;
    while (ptr) {
        if (!nums.has(ptr.val)) {
            prev = ptr;
            ptr = ptr.next;
            continue;
        }
        ptr = ptr.next;
        prev.next = ptr;
    }
    
    return head;
};