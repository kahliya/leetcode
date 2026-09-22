/*
 * @lc app=leetcode id=3524 lang=typescript
 *
 * [3524] Find X Value of Array I
 */

// @lc code=start
function resultArray(nums: number[], k: number): number[] {
  // Intuition: DP to calculate all prior remainders.
  // > Modulo carries forward with multiplication
  // > ((a % k) * (b % k)) % k = (a*b) % k

  // First attempt O(n^2) TLE
  // > Idea: Count occurrences of prev remainders instead

  const xVal: number[] = Array(k).fill(0);
  let prev: number[] = Array(k).fill(0);

  for (const n of nums) {
    const curr = Array(k).fill(0);

    const x = n % k;
    for (let i = 0; i < k; i++) {
      if (prev[i] === 0) continue;

      const r = (i * x) % k;
      curr[r] += prev[i];
      xVal[r] += prev[i];
    }

    curr[x]++;
    xVal[x]++;

    prev = curr;
  }

  return xVal;
}
// @lc code=end
const rez = [];
rez.push(resultArray([1, 2, 3, 4, 5], 3));
rez.push(resultArray([1, 2, 4, 8, 16, 32], 4));
rez.push(resultArray([1, 1, 2, 1, 1], 2));
rez.push(resultArray([3, 5, 9, 6], 3));
console.log(rez);
