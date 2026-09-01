/*
 * @lc app=leetcode id=1464 lang=typescript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  nums.sort((a, b) => a-b);
  return Math.max(
    (nums[0]-1) * (nums[1]-1),
    (nums[nums.length-1]-1) * (nums[nums.length-2]-1)
  )
}
// @lc code=end
const rez = [];
rez.push(maxProduct([3,4,5,2]));
console.log(rez);
