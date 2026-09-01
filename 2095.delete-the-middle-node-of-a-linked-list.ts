/*
 * @lc app=leetcode id=2095 lang=typescript
 *
 * [2095] Delete the Middle Node of a Linked List
 */

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start

function deleteMiddle(head: ListNode | null): ListNode | null {
  let fastPtr: ListNode | null = head!;
  let slowPtr: ListNode | null = head!;
  let slowPrev: ListNode = head!;

  if (!slowPtr.next) return null;

  while (fastPtr && fastPtr.next) {
    fastPtr = fastPtr.next.next;
    slowPrev = slowPtr!;
    slowPtr = slowPtr!.next;
  }

  slowPrev.next = slowPtr!.next;

  return head;
}

// @lc code=end
const n6 = new ListNode(6, null);
const n5 = new ListNode(2, n6);
const n4 = new ListNode(1, n5);
const n3 = new ListNode(7, n4);
const n2 = new ListNode(4, n3);
const n1 = new ListNode(3, n2);
const n0 = new ListNode(1, n1);

let rez = deleteMiddle(n0);
while (rez) {
  console.log(rez.val);
  rez = rez.next;
}
