/*
 * @lc app=leetcode id=3731 lang=typescript
 *
 * [3731] Find Missing Elements
 */

// @lc code=start
function findMissingElements(nums: number[]): number[] {
  nums.sort((a, b) => b - a);

  let curr = nums.pop()!;
  let next = nums.pop()!;
  const missing: number[] = [];
  while (next) {
    if (++curr !== next) {
      missing.push(curr);
      continue;
    }

    curr = next;
    next = nums.pop()!;
  }

  return missing;
}
// @lc code=end
const rez = [];
rez.push(findMissingElements([1, 4, 2, 5]));
rez.push(findMissingElements([7, 8, 6, 9]));
rez.push(findMissingElements([5, 1]));
console.log(rez);
