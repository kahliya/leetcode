/*
 * @lc app=leetcode id=3286 lang=typescript
 *
 * [3286] Find a Safe Walk Through a Grid
 */

// @lc code=start
function findSafeWalk(grid: number[][], health: number): boolean {
  // Intuition: DFS,
  // >> mark grids with damage taken
  // >> when overlap, drop if current damage is already higher

  let dmgGrid: number[][] = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(-1),
  );
  function runDFS([x, y]: number[], damage: number): boolean {
    // Out of bounds, drop
    if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return false;

    damage += grid[x][y];

    // Previously explored AND reached with lower damage, drop
    const prevDmg = dmgGrid[x][y];
    if (prevDmg !== -1 && prevDmg <= damage) return false;

    dmgGrid[x][y] = damage;

    // Health hit 0, drop
    if (damage >= health) return false;

    if (x === grid.length - 1 && y === grid[0].length - 1) return true;

    return (
      runDFS([x - 1, y], damage) || // up
      runDFS([x, y - 1], damage) || // left
      runDFS([x + 1, y], damage) || // down
      runDFS([x, y + 1], damage) // right
    );
  }

  return runDFS([0, 0], 0);
}
// @lc code=end
// const rez = findSafeWalk(
//   [
//     [0, 1, 0, 0, 0],
//     [0, 1, 0, 1, 0],
//     [0, 0, 0, 1, 0],
//   ],
//   1,
// ); // false

// const rez = findSafeWalk(
//   [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ],
//   5,
// ); // true

const rez = findSafeWalk(
  [
    [0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 1],
    [0, 0, 1, 0, 1, 0],
  ],
  3,
);

console.log("rez:", rez);
