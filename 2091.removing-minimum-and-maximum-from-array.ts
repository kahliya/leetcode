/*
 * @lc app=leetcode id=2091 lang=typescript
 *
 * [2091] Removing Minimum and Maximum From Array
 */

// @lc code=start
function minimumDeletions(nums: number[]): number {
  let min = nums[0];
  let max = nums[0];
  let minIdx = 0;
  let maxIdx = 0;

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (n < min) {
      min = n;
      minIdx = i;
    } else if (n > max) {
      max = n;
      maxIdx = i;
    }
  }

  const dMin = Math.min(nums.length - minIdx, minIdx + 1);
  const dMax = Math.min(nums.length - maxIdx, maxIdx + 1);

  return Math.min(
    dMin + dMax,
    Math.max(minIdx, maxIdx) + 1,
    nums.length - Math.min(minIdx, maxIdx),
  );
}

// @lc code=end
const rez = [];
rez.push(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6]));
rez.push(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5]));
rez.push(minimumDeletions([101]));
rez.push(
  minimumDeletions([
    -1, -53, 93, -42, 37, 94, 97, 82, 46, 42, -99, 56, -76, -66, -67, -13, 10,
    66, 85, -28,
  ]),
);
console.log(rez);
