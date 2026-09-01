/*
 * @lc app=leetcode id=3622 lang=typescript
 *
 * [3622] Check Divisibility by Digit Sum and Product
 */

// @lc code=start
function checkDivisibility(n: number): boolean {
  let sum = 0;
  let prod = 1;
  let tmp = n

  while (tmp > 0) {
    const d = tmp % 10;
    sum += d;
    prod *= d;
    tmp = Math.floor(tmp/10);
  }

  return (n % (sum + prod)) === 0;
}
// @lc code=end
const rez = [];
rez.push(checkDivisibility(99));
rez.push(checkDivisibility(23));
console.log(rez);
