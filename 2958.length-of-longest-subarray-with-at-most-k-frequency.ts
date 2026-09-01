/*
 * @lc app=leetcode id=2958 lang=typescript
 *
 * [2958] Length of Longest Subarray With at Most K Frequency
 */

// @lc code=start
function maxSubarrayLength(nums: number[], k: number): number {
  let freq: Map<number, number> = new Map();
  let currHead: number = 0;
  let maxLen: number = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const thisFreq = (freq.get(n) ?? 0) + 1;
    freq.set(n, thisFreq);

    if (thisFreq > k) {
      maxLen = Math.max(i - currHead, maxLen);
      do {
        freq.set(nums[currHead], freq.get(nums[currHead])! - 1);
        currHead++;
      } while (nums[currHead-1] !== n);
    }
  }

  maxLen = Math.max(nums.length - currHead, maxLen);
  return maxLen;
}
// @lc code=end
const rez = [];
rez.push(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2));
rez.push(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1));
rez.push(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4));
rez.push(maxSubarrayLength([1], 1));
rez.push(maxSubarrayLength([1, 4, 4, 3], 1));

console.log(rez);
