/*
 * @lc app=leetcode id=2913 lang=typescript
 *
 * [2913] Subarrays Distinct Element Sum of Squares I
 */

// @lc code=start
function sumCounts(nums: number[]): number {
  const lastSeen: number[] = [];
  const counts: number[] = [];
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    counts[i] = 1;
    const n = nums[i];

    let prev = lastSeen[n];
    for (let j = prev >= 0 ? prev + 1 : 0; j < i; j++) counts[j]++;

    ans += counts.filter(Boolean).reduce((total, n) => total + n * n, 0);
    lastSeen[n] = i;
  }

  return ans;
}
// @lc code=end
const rez = [];
rez.push(sumCounts([1, 2, 1]));
rez.push(sumCounts([1, 1]));
console.log(rez);
