/*
 * @lc app=leetcode id=3903 lang=typescript
 *
 * [3903] Smallest Stable Index I
 */

// @lc code=start
function firstStableIndex(nums: number[], k: number): number {
  let maxLR: number[] = Array(nums.length);
  let minRL: number[] = Array(nums.length);

  let min: number = Infinity;
  let max: number = -1;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    max = Math.max(max, n);
    maxLR[i] = max;


    const mIdx = nums.length - 1 - i;
    const m = nums[mIdx];
    min = Math.min(min, m);
    minRL[mIdx] = min;
  }

  for (let i = 0; i < nums.length; i++) {
    if (maxLR[i] - minRL[i] <= k) return i;
  }
  return -1;
}
// @lc code=end
const rez = [];
rez.push(firstStableIndex([5, 0, 1, 4], 3));
rez.push(firstStableIndex([3, 2, 1], 1));
console.log(rez);