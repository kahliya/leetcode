/*
 * @lc app=leetcode id=1260 lang=typescript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
function shiftGrid(grid: number[][], k: number): number[][] {
  const rowLen = grid[0].length;
  const flatGrid = grid.flat();
  for (let i = 0; i < k; i++) flatGrid.unshift(flatGrid.pop()!);

  const result: number[][] = [];
  let row = [];
  for (const e of flatGrid) {
    row.push(e);
    if (row.length === rowLen) {
      result.push(row);
      row = [];
    }
  }

  return result;
}

// @lc code=end
const rez = shiftGrid(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  1,
);
console.log(rez);
