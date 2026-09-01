/*
 * @lc app=leetcode id=3702 lang=typescript
 *
 * [3702] Longest Subsequence With Non-Zero Bitwise XOR
 */

// @lc code=start
function longestSubsequence(nums: number[]): number {
  let hasNonZero: boolean = false;
  let x: number = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n !== 0) hasNonZero = true;
    x ^= n;
  }

  if (!hasNonZero) return 0;
  return x !== 0 ? nums.length : nums.length - 1;
}
// @lc code=end
const rez = [];
rez.push(longestSubsequence([1, 2, 3]));
rez.push(longestSubsequence([2, 3, 4]));
rez.push(longestSubsequence([0, 7]));
rez.push(longestSubsequence([7, 6, 1, 9]));
rez.push(longestSubsequence([0]));
console.log(rez);
