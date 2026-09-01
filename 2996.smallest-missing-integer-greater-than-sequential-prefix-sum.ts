/*
 * @lc app=leetcode id=2996 lang=typescript
 *
 * [2996] Smallest Missing Integer Greater Than Sequential Prefix Sum
 */

// @lc code=start
function missingInteger(nums: number[]): number {
  const set = new Set(nums);
  let prev = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    if (n !== prev + 1) break;
    prev = n;
    sum += n;
  }

  while (set.has(sum)) sum++;
  return sum;
}
// @lc code=end
const rez = [];
rez.push(missingInteger([1, 2, 3, 2, 5]));
rez.push(missingInteger([3, 4, 5, 1, 12, 14, 13]));
console.log(rez);
