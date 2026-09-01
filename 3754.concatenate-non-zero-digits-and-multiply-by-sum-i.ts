/*
 * @lc app=leetcode id=3754 lang=typescript
 *
 * [3754] Concatenate Non-Zero Digits and Multiply by Sum I
 */

// @lc code=start
function sumAndMultiply(n: number): number {
  let sum = 0;
  let x = 0;
  let mult = 1;

  while (n > 0) {
    const d = n % 10;
    if (d !== 0) {
      sum += d;
      x += mult * d;
      mult *= 10;
    }

    n = Math.floor(n / 10);
  }

  return sum * x;
}
// @lc code=end
const rez = sumAndMultiply(10203004); // 12340
// const rez = sumAndMultiply(1000); // 1
console.log(rez);
