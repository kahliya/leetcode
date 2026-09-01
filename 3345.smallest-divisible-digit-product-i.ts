/*
 * @lc app=leetcode id=3345 lang=typescript
 *
 * [3345] Smallest Divisible Digit Product I
 */

// @lc code=start
function smallestNumber(n: number, t: number): number {
  let rez: number = n - 1;
  let i: number = rez;
  let x: number = 1;

  do {
    rez++;
    i = rez;
    x = 1;
    while (i !== 0) {
      const digit = i % 10;
      i = Math.floor(i / 10);
      x *= digit;
    }
  } while (x % t !== 0);

  return rez;
}
// @lc code=end
const rez = [];
rez.push(smallestNumber(10, 2));
rez.push(smallestNumber(15, 3));
rez.push(smallestNumber(1, 6));
console.log(rez);
