/*
 * @lc app=leetcode id=3871 lang=typescript
 *
 * [3871] Count Commas in Range II
 */

// @lc code=start
function countCommas(n: number): number {
  if (n < 1000) return 0;

  let commas = 0;
  let x = 1;
  for (; n >= 10 ** (3 * (x + 1)); x++) {
    const nums = 10 ** (3 * (x + 1)) - 10 ** (3 * x);
    commas += nums * x;
  }

  return commas + (n + 1 - 10 ** (3 * x)) * x;
}
// @lc code=end
const rez = [];
rez.push(countCommas(1002));
rez.push(countCommas(998));
rez.push(countCommas(1000000));
rez.push(countCommas(2000000));
rez.push(countCommas(2000000000));
console.log(rez);
