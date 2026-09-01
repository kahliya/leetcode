/*
 * @lc app=leetcode id=1833 lang=typescript
 *
 * [1833] Maximum Ice Cream Bars
 */

// @lc code=start
function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);
  
  let amnt = coins;
  let bars = 0;
  
  for (const c of costs) {
    amnt -= c;
    if (amnt < 0) break;
    bars++;
  }

  return bars;
}

// @lc code=end
const rez = maxIceCream([4,7,6,4,4,2,2,4,8,8], 41);
console.log(`rez: ${rez}`);
