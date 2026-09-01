/*
 * @lc app=leetcode id=1291 lang=typescript
 *
 * [1291] Sequential Digits
 */

// @lc code=start
function sequentialDigits(low: number, high: number): number[] {
  let minDigits = low.toString().length;
  let maxDigits = high.toStringw().length;

  const out = []
  for (let digits = minDigits; digits <= maxDigits; digits++) {
    for (let s = 1; s <= 10-digits; s++) {
      let curr = s
      for (let d = 1; d < digits; d++) {
        curr = (curr*10) + s+d;
      }
      if (curr >= low && curr <= high) out.push(curr);
    }
  }

  return out;
}

// @lc code=end
const rez = [];
rez.push(sequentialDigits(1000, 13000));
console.log(rez);
