/*
 * @lc app=leetcode id=3870 lang=typescript
 *
 * [3870] Count Commas in Range
 */

// @lc code=start
function countCommas(n: number): number {
  return n < 1000 ? 0 : n - 999;
}
// @lc code=end
