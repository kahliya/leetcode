/*
 * @lc app=leetcode id=3691 lang=typescript
 *
 * [3691] Maximum Total Subarray Value II
 */

// @lc code=start
function maxTotalValue(nums: number[], k: number): number {
  let values: number[] = [];

  for (let head = 0; head <= k; ) {
    // console.log("calc head=", head);
    const thisIterVals: number[] = [];

    let min = Infinity;
    let max = -1;

    let minIdx = Infinity;
    let maxIdx = Infinity;

    let tail = head;
    for (; tail < nums.length - k; tail++) {
      const curr = nums[tail];
      if (curr > max) max = curr;
      if (curr < min) min = curr;
    }
    for (; tail < nums.length; tail++) {
      const curr = nums[tail];
      if (curr > max) {
        max = curr;
        maxIdx = Math.min(maxIdx, tail);
      }
      if (curr < min) {
        min = curr;
        minIdx = Math.min(minIdx, tail);
      }

      if (max - min > 0) thisIterVals.push(max - min);
    }

    // console.log(minIdx, maxIdx);

    // Infinity means head contains either min or max
    const jump =
      minIdx === Infinity || maxIdx === Infinity
        ? 1
        : Math.min(minIdx + 1, maxIdx + 1) - head;

    for (let j = 0; j < jump; j++) {
      // console.log("pushing", thisIterVals);
      values.push(...thisIterVals);
      values = values.sort((a, b) => b - a).slice(0, k);
      thisIterVals.splice(0, 1);
    }

    
    head += jump;
  }

  // console.log(values);

  const largestK = values.slice(0, k);
  return largestK.reduce((a, b) => a + b, 0);
}

// @lc code=end
// const rez = maxTotalValue([18, 36, 6], 6);
const rez = maxTotalValue([4,2,5,1], 3);
// const rez = maxTotalValue([32, 19, 27, 46, 50], 10);

console.log(rez);
