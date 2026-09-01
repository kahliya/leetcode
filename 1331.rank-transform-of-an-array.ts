/*
 * @lc app=leetcode id=1331 lang=typescript
 *
 * [1331] Rank Transform of an Array
 */

// @lc code=start
function arrayRankTransform(arr: number[]): number[] {
  const sorted = [...new Set(arr)].toSorted((a, b) => a - b);

  const elemRanks: Map<number, number> = new Map();
  sorted.forEach((a, idx) => elemRanks.set(a, idx+1))

  return arr.map((a) => elemRanks.get(a)!);
}
// @lc code=end
const rez = arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]);
console.log(rez);
