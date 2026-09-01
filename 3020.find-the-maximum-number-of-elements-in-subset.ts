/*
 * @lc app=leetcode id=3020 lang=typescript
 *
 * [3020] Find the Maximum Number of Elements in Subset
 */

// @lc code=start
function maximumLength(nums: number[]): number {
  const freq: Record<number, number> = {};

  // Count frequencies first
  for (let n of nums) {
    freq[n] = n in freq ? freq[n] + 1 : 1;
  }

  // Then check for possible subsets
  let maxPow = 0;

  for (const n of nums) {
    let curr = Math.sqrt(Number(n));
    let pow = 1;

    while (Number.isInteger(curr) && curr !== 1) {
      if (!freq[curr] || freq[curr] === 1) break;
      curr = Math.sqrt(curr);
      pow++;
    }

    maxPow = Math.max(maxPow, pow);
  }

  const len = maxPow * 2 - 1;
  
  if (freq[1]) {
    const lenFreq1 = freq[1] % 2 === 0 ? freq[1] - 1 : freq[1];
    return Math.max(lenFreq1, len);
  } 

  return len;
}

// @lc code=end
// const rez = maximumLength([5, 4, 1, 2, 2]); //3
// const rez = maximumLength([1,3,2,4]); // 1
// const rez = maximumLength([1, 1]); // 1
// const rez = maximumLength([1,16,4,25,121]); // 1
// const rez = maximumLength([
//   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024,
// ]); // 9
console.log("rez:", rez);
