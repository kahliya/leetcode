/*
 * @lc app=leetcode id=2812 lang=typescript
 *
 * [2812] Find the Safest Path in a Grid
 */

// @lc code=start
function maximumSafenessFactor(grid: number[][]): number {
  const theives: number[][] = [];
  // Get coordinates of all theives
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 1) theives.push([x, y]);
    }
  }

  const distGrid: number[][] = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(-1),
  );

  let explore = [...theives];
  let next = [];
  let dist = 0;

  // Multi-source BFS (from all theives at the same time)
  // Assign each cell a distance
  // If collide, keep the lower distance
  while (explore.length !== 0) {
    for (const [x, y] of explore) {
      if (distGrid[x][y] >= 0) continue;
      distGrid[x][y] = dist;

      if (x - 1 >= 0) next.push([x - 1, y]); // up
      if (y - 1 >= 0) next.push([x, y - 1]); // left
      if (y + 1 < distGrid[0].length) next.push([x, y + 1]); // right
      if (x + 1 < distGrid.length) next.push([x + 1, y]); // down
    }

    explore = next;
    next = [];
    dist++;
  }

  // Find whether there's a valid path from (0,0) to (n-1,n-1) with safety x
  // Path safety is a >= relationship
  //    >> i.e. if path of safety 5 exists, then 4, 3, 2, 1 exists too.
  //    >> use binary search to find the max safety factor with a valid path
  // Since we are finding a valid path, use DFS (feeling lucky hehexd)
  let visited: boolean[][] = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(false),
  );
  function findPathDFS([x, y]: number[], threshold: number): boolean {
    // out of bounds
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return false;

    // already explored
    if (visited[x][y]) return false;

    visited[x][y] = true;

    // below threshold
    if (distGrid[x][y] < threshold) return false;

    // reached end
    if (x === grid.length - 1 && y === grid[0].length - 1) return true;

    return (
      findPathDFS([x - 1, y], threshold) || // up
      findPathDFS([x, y + 1], threshold) || // right
      findPathDFS([x + 1, y], threshold) || // down
      findPathDFS([x, y - 1], threshold) // left
    );
  }

  let high = dist + 1;
  let low = 0;
  let count = 0;
  while (high - low > 1) {
    visited = Array.from({ length: grid.length }, () =>
      Array(grid[0].length).fill(false),
    );
    const pathExists = findPathDFS([0, 0], dist);

    // console.log(
    //   `high=${high}, low=${low}, dist=${dist}, pathExists=${pathExists}`,
    // );

    if (pathExists) {
      low = dist;
    } else {
      high = dist;
    }

    dist = low + Math.floor((high - low) / 2);

    count++;
    if (count > 10) break;
  }

  return dist;
}
// @lc code=end
// const rez = maximumSafenessFactor([
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 1],
// ]); // 0
// const rez = maximumSafenessFactor([
//   [0, 0, 0, 1],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [1, 0, 0, 0],
// ]); // 2
// const rez = maximumSafenessFactor([
//   [0, 1, 1],
//   [0, 1, 1],
//   [0, 0, 1],
// ]); // 0
// const rez = maximumSafenessFactor([[1]]); // 0
const rez = maximumSafenessFactor([[0,1,1],[0,1,1],[1,1,1]]); // 0
console.log("rez:", rez);
