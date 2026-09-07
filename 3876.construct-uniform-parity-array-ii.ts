/*
 * @lc app=leetcode id=3876 lang=typescript
 *
 * [3876] Construct Uniform Parity Array II
 */

// @lc code=start
function uniformArray(nums: number[]): boolean {
  // Intuition:
  // > If there's an odd number, it's always true.
  // > The smallest number in nums will determine the parity
  // > If smallest is even, all has to be even, else false (you can't flip the smallest odd)
  // > If smallest is odd, all can be flipped.
  let minOdd = Infinity;
  let minEven = Infinity;
  for (const n of nums) {
    if (n % 2 === 1 && n < minOdd) minOdd = n;
    else if (n % 2 === 0 && n < minEven) minEven = n;
  }

  // nums contains only 1 parity from the start
  if (minOdd === Infinity || minEven === Infinity) return true;
  return minOdd < minEven;
}
// @lc code=end
const rez = [];
rez.push(uniformArray([1, 4, 7])); // true
rez.push(uniformArray([2, 3])); // false
rez.push(uniformArray([4, 6])); // true
console.log(rez);
