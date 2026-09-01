/*
 * @lc app=leetcode id=2058 lang=typescript
 *
 * [2058] Find the Minimum and Maximum Number of Nodes Between Critical Points
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  if (head === null) return [-1, -1];

  let prev = head.val;
  head = head.next;

  // Find first critical point
  while (head !== null) {
    if (!head.next) return [-1, -1];
    if (
      (prev > head.val && head.next.val > head.val) ||
      (prev < head.val && head.next.val < head.val)
    ) {
      break;
    }
    prev = head.val;
    head = head.next;
  }

  let currDist = 1;
  let maxDist = -1;
  let minDist = Infinity;
  let prevPoint = 0;

  prev = head!.val;
  head = head!.next;
  while (head !== null) {
    if (!head.next) break;
    if (
      (prev > head.val && head.next.val > head.val) ||
      (prev < head.val && head.next.val < head.val)
    ) {
      maxDist = currDist;
      minDist = Math.min(minDist, currDist - prevPoint);
      prevPoint = currDist;
    }

    prev = head.val;
    head = head.next;
    currDist++;
  }

  return minDist !== Infinity ? [minDist, maxDist] : [-1, -1];
}
// @lc code=end
const rez = [];

const a6 = new ListNode(2, null);
const a5 = new ListNode(1, a6);
const a4 = new ListNode(5, a5);
const a3 = new ListNode(2, a4);
const a2 = new ListNode(1, a3);
const a1 = new ListNode(3, a2);
const head1 = new ListNode(5, a1);
rez.push(nodesBetweenCriticalPoints(head1));

const b3 = new ListNode(1, null);
const b2 = new ListNode(4, b3);
const b1 = new ListNode(2, b2);
const head2 = new ListNode(4, b1);
rez.push(nodesBetweenCriticalPoints(head2));
console.log(rez);
