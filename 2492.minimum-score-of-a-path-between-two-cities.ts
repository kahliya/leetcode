/*
 * @lc app=leetcode id=2492 lang=typescript
 *
 * [2492] Minimum Score of a Path Between Two Cities
 */

// @lc code=start
function minScore(n: number, roads: number[][]): number {
  // Step 1. Construct graph, only including nodes connected to city 1 or N.
  const connections: number[][][] = Array.from({length: n+1}, () => []);
  for (const [city, other, distance] of roads) {
    connections[city].push([other, distance]);
    connections[other].push([city, distance]);
  }

  // Step 2. DFS & return lowest distance (ONLY connected paths)
  const explored: boolean[] = Array(n+1).fill(false);
  let minPathDist: number = Infinity;
  function graphDFS(city: number) {
    if (explored[city]) return;
    explored[city] = true;

    for (const [other, cost] of connections[city]) {
      minPathDist = Math.min(minPathDist, cost);
      graphDFS(other);
    }
  }

  graphDFS(1)
  return minPathDist;
}
// @lc code=end
const rez = minScore(4, [
  [1, 2, 2],
  [1, 3, 4],
  [3, 4, 7],
]);
console.log("rez:", rez);
