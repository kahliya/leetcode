/*
 * @lc app=leetcode id=3069 lang=typescript
 *
 * [3069] Distribute Elements Into Two Arrays I
 */

// @lc code=start
function resultArray(nums: number[]): number[] {
  const a1: number[] = [nums[0]];
  const a2: number[] = [nums[1]];

  for (let i = 2; i < nums.length; i++) {
    if (a1[a1.length - 1] > a2[a2.length - 1]) {
      a1.push(nums[i]);
    } else {
      a2.push(nums[i]);
    }
  }

  return a1.concat(a2);
}
// @lc code=end
const rez = [];
rez.push(resultArray([2, 1, 3]));
rez.push(resultArray([5, 4, 3, 8]));
console.log(rez);
