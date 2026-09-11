/*
 * @lc app=leetcode id=3483 lang=typescript
 *
 * [3483] Unique 3-Digit Even Numbers
 */

// @lc code=start
function totalNumbers(digits: number[]): number {
  const s: Set<number> = new Set();

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue;
    for (let j = 0; j < digits.length; j++) {
      if (j === i) continue;
      for (let k = 0; k < digits.length; k++) {
        if (k === j || k === i || digits[k] & 1) continue;
        const n = digits[i] * 100 + digits[j] * 10 + digits[k]
        s.add(n);
      }
    }
  }

  return s.size;
}
// @lc code=end
const rez = [];
rez.push(totalNumbers([1, 2, 3, 4]));
rez.push(totalNumbers([0, 2, 2]));
rez.push(totalNumbers([6, 6, 6]));
rez.push(totalNumbers([9, 5, 2]));
console.log(rez);
