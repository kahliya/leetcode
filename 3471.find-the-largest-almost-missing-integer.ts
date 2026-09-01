/*
 * @lc app=leetcode id=3471 lang=typescript
 *
 * [3471] Find the Largest Almost Missing Integer
 */

// @lc code=start
function largestInteger(nums: number[], k: number): number {
  // Constraint states nums[i] is from 0 to 50
  const freq: number[] = Array(51).fill(0);

  for (let i = 0; i <= nums.length - k; i++) {
    const uniq: Set<number> = new Set();
    for (let fwd = 0; fwd < k; fwd++) {
      uniq.add(nums[i + fwd]);
    }

    for (const n of uniq) {
      freq[n]++;
    }
  }

  for (let i = freq.length - 1; i >= 0; i--) {
    if (freq[i] === 1) return i;
  }
  return -1;
}
// @lc code=end
const rez = [];
rez.push(largestInteger([3, 9, 2, 1, 7], 3));
rez.push(largestInteger([3, 9, 7, 2, 1, 7], 4));
rez.push(largestInteger([0, 0], 1));
rez.push(largestInteger([0, 50], 1));
rez.push(largestInteger([3, 1, 7, 10, 0], 1));
rez.push(largestInteger([3, 0, 12, 7, 1, 11], 6));
rez.push(largestInteger([0, 0], 2));
console.log(rez);
