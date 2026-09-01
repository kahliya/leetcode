/*
 * @lc app=leetcode id=628 lang=typescript
 *
 * [628] Maximum Product of Three Numbers
 */

// @lc code=start
function maximumProduct(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1],
  );
}
// @lc code=end
const rez = [];
rez.push(maximumProduct([1, 2, 3, 4]));
console.log(rez);
