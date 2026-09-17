/*
 * @lc app=leetcode id=1477 lang=typescript
 *
 * [1477] Find Two Non-overlapping Sub-arrays Each With Target Sum
 */

// @lc code=start
function minSumOfLengths(arr: number[], target: number): number {
  // Keep track of minimum length up till each index (prefix sum)
  // When we find a candidate subarray, check prefix for minimum before head
  let bestUpTo: number[] = Array(arr.length);
  let rez = Infinity;

  let head = 0;
  let tail = 0;
  let currSum = arr[0];

  while (tail < arr.length) {
    if (currSum === target) {
      const len = tail - head + 1;
      bestUpTo[tail] = Math.min(bestUpTo[tail - 1] || Infinity, len);
      rez = Math.min(rez, (bestUpTo[head - 1] || Infinity) + len);
      currSum += arr[++tail] - arr[++head - 1];
    } else if (currSum < target) {
      bestUpTo[tail] = bestUpTo[tail - 1] || Infinity;
      currSum += arr[++tail];
    } else if (currSum > target) {
      currSum -= arr[++head - 1];
    }
  }

  return rez !== Infinity ? rez : -1;
}
// @lc code=end
const rez = [];
rez.push(minSumOfLengths([3, 2, 2, 4, 3], 3)); // 2
rez.push(minSumOfLengths([7, 3, 4, 7], 7)); // 2
rez.push(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6)); // -1
rez.push(minSumOfLengths([1, 2, 2, 3, 2, 6, 7, 2, 1, 4, 8], 5)); // 4
console.log(rez);
