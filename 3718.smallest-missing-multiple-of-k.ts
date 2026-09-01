/*
 * @lc app=leetcode id=3718 lang=typescript
 *
 * [3718] Smallest Missing Multiple of K
 */

// @lc code=start
function missingMultiple(nums: number[], k: number): number {
  let s = new Set(nums);

  let x = k;
  while (s.has(x)) x += k;

  return x;
}
// @lc code=end
const rez = [];
rez.push(missingMultiple([8, 2, 3, 4, 6], 2));
rez.push(missingMultiple([1, 4, 7, 10, 15], 5));
console.log(rez);
