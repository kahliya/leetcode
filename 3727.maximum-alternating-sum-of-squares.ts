/*
 * @lc app=leetcode id=3727 lang=typescript
 *
 * [3727] Maximum Alternating Sum of Squares
 */

// @lc code=start
function maxAlternatingSum(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) nums[i] *= nums[i];
  nums.sort((a, b) => a - b);

  let total = 0;
  let i = 0;
  for (; i < Math.floor(nums.length / 2); i++) total -= nums[i];
  for (; i < nums.length; i++) total += nums[i];

  return total;
}
// @lc code=end
const rez = [];
rez.push(maxAlternatingSum([1, 2, 3]));
console.log(rez);
