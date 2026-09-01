/*
 * @lc app=leetcode id=3691 lang=typescript
 *
 * [3691] Maximum Total Subarray Value II
 */

import { PriorityQueue } from "@datastructures-js/priority-queue";

// @lc code=start
function maxTotalValue(nums: number[], k: number): number {
  // Step 1: Create 2 sparse tables (max & min) of the entire array
  const maxTbl: number[][] = [];
  const minTbl: number[][] = [];
  maxTbl[0] = [...nums];
  minTbl[0] = [...nums];
  for (let exp = 1; 2 ** exp <= nums.length; exp++) {
    const prevLength = 2 ** (exp - 1);

    maxTbl[exp] = [];
    minTbl[exp] = [];
    for (let idx = 0; idx <= nums.length - 2 ** exp; idx++) {
      maxTbl[exp][idx] = Math.max(
        maxTbl[exp - 1][idx],
        maxTbl[exp - 1][idx + prevLength],
      );
      minTbl[exp][idx] = Math.min(
        minTbl[exp - 1][idx],
        minTbl[exp - 1][idx + prevLength],
      );
    }
  }

  const calcMaxValInRange = (head: number, tail: number) => {
    const thisLen = tail - head + 1;
    const thisExp = Math.floor(Math.log2(thisLen));

    const thisMax = Math.max(
      maxTbl[thisExp][head],
      maxTbl[thisExp][tail + 1 - 2 ** thisExp],
    );
    const thisMin = Math.min(
      minTbl[thisExp][head],
      minTbl[thisExp][tail + 1 - 2 ** thisExp],
    );

    return thisMax - thisMin;
  };

  // Step 2: Using the sparse table,
  // A. Calculate f = max(nums[l...n-1]) - min(nums[l...n-1]) for all l
  // B. Put these values into a PriorityQueue
  const maxQ = new PriorityQueue<number[]>((a, b) => b[0] - a[0]);

  const tail = nums.length - 1;
  for (let head = 0; head < nums.length; head++) {
    const thisVal = calcMaxValInRange(head, tail);
    maxQ.enqueue([thisVal, head, tail]);
  }

  // C. Pop the highest, that's your highest k
  // D. Calculate f for that (l & r) again, but move r down 1, push back into PriorityQueue
  let rez = 0;
  for (let x = 0; x < k; x++) {
    const [val, head, tail] = maxQ.dequeue()!;
    rez += val;

    if (head === tail) continue;

    const newTail = tail - 1;
    const nextVal = calcMaxValInRange(head, newTail);
    maxQ.enqueue([nextVal, head, newTail]);
  }

  return rez;
}

// @lc code=end
// const rez = maxTotalValue([4, 2, 5, 1], 3);
// const rez = maxTotalValue([32, 19, 27, 46, 50], 10);
const rez = maxTotalValue([22], 1); // 0
// const rez = maxTotalValue([11, 8], 3); // 3
console.log(rez);
