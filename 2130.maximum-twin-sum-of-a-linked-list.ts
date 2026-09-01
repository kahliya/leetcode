/*
 * @lc app=leetcode id=2130 lang=typescript
 *
 * [2130] Maximum Twin Sum of a Linked List
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
function pairSum(head: ListNode | null): number {
  const values = [];

  let ptr = head;
  while (ptr) {
    values.push(ptr.val);
    ptr = ptr.next;
  }

  const halfLen = values.length / 2;

  let max = 0;
  for (let i = 0; i < halfLen; i++) {
    const thisSum = values[i] + values[values.length - 1 - i];
    max = Math.max(thisSum, max);
  }

  return max;
}

// @lc code=end

// 4,2,2,3
const n3 = new ListNode(1, null);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(4, n2);
const n0 = new ListNode(5, n1);

const rez = pairSum(n0);
console.log("rez:", rez);
