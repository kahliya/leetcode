/*
 * @lc app=leetcode id=1846 lang=typescript
 *
 * [1846] Maximum Element After Decreasing and Rearranging
 */

// @lc code=start
// Original
// function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
//   const freq: Record<number, number> = {};

//   for (const n of arr) {
//     if (!(n in freq)) freq[n] = 0;
//     freq[n] = freq[n] + 1;
//   }

//   let currMax = 0;
//   let currCount = 0;
//   const keysSorted = Object.keys(freq).map(a => Number(a)).toSorted(
//     (a, b) => a-b,
//   );
//   for (const key of keysSorted) {
//     currMax = key;
//     currCount += Math.min(key, freq[key]);
//     currCount = Math.min(currCount, currMax);
//   }

//   return currCount;
// }

function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  arr.sort((a, b) => a - b);

  let prev = 0
  for (const n of arr) {
    prev = Math.min(n, prev+1);
  }

  return prev;
}

// @lc code=end
// const rez = maximumElementAfterDecrementingAndRearranging([2,2,1,2,1]); // 2
// const rez = maximumElementAfterDecrementingAndRearranging([100, 1, 1000]); // 3
const rez = maximumElementAfterDecrementingAndRearranging([
  1, 1, 1, 1, 1, 1, 2, 9, 10,
]); // 3
console.log(rez);
