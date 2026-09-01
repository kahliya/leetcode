/*
 * @lc app=leetcode id=3532 lang=typescript
 *
 * [3532] Path Existence Queries in a Graph I
 */

// @lc code=start
function pathExistenceQueries(
  n: number,
  nums: number[],
  maxDiff: number,
  queries: number[][],
): boolean[] {
  // Prefix table, +1 if path DOES NOT exist, 0 otherwise
  // If L & R are connected, then pf[R] === pf[L]
  const pf: number[] = [0];
  for (let idx = 1; idx < n; idx++) {
    const n = nums[idx];
    const other = nums[idx - 1];
    pf.push(n - other <= maxDiff ? pf[idx - 1] : pf[idx - 1] + 1);
  }

  const result: boolean[] = [];
  for (const q of queries) {
    result.push(pf[q[0]] === pf[q[1]]);
  }

  return result;
}
// @lc code=end
const rez1 = pathExistenceQueries(2, [1, 3], 1, [
  [0, 0],
  [0, 1],
]);

const rez2 = pathExistenceQueries(4, [2, 5, 6, 8], 2, [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
]);

const rez3 = pathExistenceQueries(2, [2975, 50642], 6, [[1, 0]]); // false

const rez4 = pathExistenceQueries(5, [8779, 9555, 30023, 71431, 76127], 54024, [
  [4, 1],
]); // true

console.log(rez1, rez2, rez3, rez4);
