/*
 * @lc app=leetcode id=3689 lang=typescript
 *
 * [3689] Maximum Total Subarray Value I
 */

// @lc code=start
function maxTotalValue(nums: number[], k: number): number {
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    return (max-min)*k;
};
// @lc code=end

const rez = maxTotalValue([4,2,5,1], 3);
console.log(rez);
