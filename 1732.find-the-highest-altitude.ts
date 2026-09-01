/*
 * @lc app=leetcode id=1732 lang=typescript
 *
 * [1732] Find the Highest Altitude
 */

// @lc code=start
function largestAltitude(gain: number[]): number {
    let a = 0;
    let max = 0;
    for (const g of gain) {
        a += g;
        max = Math.max(a, max);
    }

    return max;
};

// @lc code=end
// const rez = largestAltitude([-5,1,5,0,-7]);
const rez = largestAltitude([-4,-3,-2,-1,4,3,2]);
console.log(rez);
