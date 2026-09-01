/*
 * @lc app=leetcode id=2948 lang=typescript
 *
 * [2948] Make Lexicographically Smallest Array by Swapping Elements
 */

// @lc code=start
function lexicographicallySmallestArray(
  nums: number[],
  limit: number,
): number[] {
  function processGroup() {
    indexes.sort((a, b) => a - b);
    for (let j = 0; j < values.length; j++) rez[indexes[j]] = values[j];
  }

  const rez = Array(nums.length);
  const numsIndexed: number[][] = [];
  for (let i = 0; i < nums.length; i++) numsIndexed.push([nums[i], i]);
  numsIndexed.sort((a, b) => a[0] - b[0]);

  let values: number[] = [numsIndexed[0][0]];
  let indexes: number[] = [numsIndexed[0][1]];
  for (let i = 1; i < numsIndexed.length; i++) {
    const x = numsIndexed[i];
    if (x[0] - values[values.length - 1] > limit) {
      processGroup();
      values = [];
      indexes = [];
    }

    values.push(x[0]);
    indexes.push(x[1]);
  }

  processGroup();
  return rez;
}
// @lc code=end
const rez = [];
rez.push(lexicographicallySmallestArray([1, 5, 3, 9, 8], 2));
rez.push(lexicographicallySmallestArray([1, 7, 6, 18, 2, 1], 3));
rez.push(lexicographicallySmallestArray([1, 7, 28, 19, 10], 3));
console.log(rez);
