/*
 * @lc app=leetcode id=486 lang=typescript
 *
 * [486] Predict the Winner
 */

// @lc code=start
function predictTheWinner(nums: number[]): boolean {
  // Objective: get the maximum difference for each possible range
  const maxPoint: number[][] = Array.from({ length: nums.length }, () => []);

  // Step 1: max(n, n+x) from 0 to n-x-1 in nums
  // x = 1
  for (let i = 0; i < nums.length - 1; i++) {
    let a = nums[i];
    let b = nums[i + 1];
    maxPoint[i][i + 1] = Math.max(a, b);
  }

  console.log(maxPoint);

  // Step 2: Repeat Step 1 for each x from 0 to n-2
  // max(a, b) = max(max(a+1, b), max(a, b-1))

  // Step 3: Will end with max(0, n-1).
  // > If >= 0, p1 wins. Else, p2 win
}
// @lc code=end
const rez = [];
rez.push(predictTheWinner([1, 5, 233, 7]));
