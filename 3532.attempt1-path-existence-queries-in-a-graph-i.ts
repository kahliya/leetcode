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
  // NOTE: OVERCOMPLICATED, can use prefix sums

  // Intuition: binary lift table
  // tbl[exponent x][idx]
  // >> true if path exists for the next 2^x nodes starting from that idx
  // >> false otherwise
  // tbl[x][idx] =
  //          tbl[x-1][idx] &&
  //          tbl[x-1][idx+(x-1)] &&
  //          | nums[idx] - nums[idx+(x-1)] | <= maxDiff

  // Preprocessing binary lift table
  const tbl: boolean[][] = [];

  // Initialize all length 1 (2^0) to true (node always has path to itself)
  tbl.push(Array(n).fill(true));

  for (let x = 1; 2 ** x <= n; x++) {
    tbl[x] = [];
    for (let idx = 0; idx <= n - 2 ** x; idx++) {
      const prevX = x - 1;
      const other = idx + 2 ** prevX;

      tbl[x][idx] =
        tbl[prevX][idx] &&
        tbl[prevX][other] &&
        nums[other] - nums[other - 1] <= maxDiff;
    }
  }

  // Read queries
  const result = [];
  for (const q of queries) {
    const lower = q[0] < q[1] ? q[0] : q[1];
    const higher = q[0] < q[1] ? q[1] : q[0];
    const diff = higher - lower;
    if (diff === 0) {
      result.push(true);
      continue;
    }

    const exp = Math.floor(Math.log2(diff));
    const len = 2 ** exp;
    const other = higher - len + 1;

    const answer =
      tbl[exp][lower] &&
      tbl[exp][other] &&
      nums[other] - nums[other - 1] <= maxDiff;
    result.push(answer);
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
