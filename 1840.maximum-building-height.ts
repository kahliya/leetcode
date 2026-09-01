/*
 * @lc app=leetcode id=1840 lang=typescript
 *
 * [1840] Maximum Building Height
 */

// @lc code=start
function maxBuilding(n: number, restrictions: number[][]): number {
  if (restrictions.length === 0) return n - 1;
  if (restrictions[restrictions.length - 1][0] !== n) restrictions.push([n, n]);

  restrictions.sort((a, b) => a[0] - b[0]);

  // Tighten limits to remove "impossible" situaions

  // Tighten L -> R
  let prevIdx = 1;
  let prevLimit = 0;
  for (let i = 0; i < restrictions.length; i++) {
    let [rIdx, rLimit] = restrictions[i];
    const maxSteps = rIdx - prevIdx;
    const maxPossible = prevLimit + maxSteps;
    const newLimit = Math.min(rLimit, maxPossible);
    restrictions[i][1] = newLimit;

    prevIdx = rIdx;
    prevLimit = newLimit;
  }

  // Tighten R -> L
  prevIdx = n;
  prevLimit = n;
  for (let i = restrictions.length - 1; i >= 0; i--) {
    let [rIdx, rLimit] = restrictions[i];
    const maxSteps = prevIdx - rIdx; // note, flipped order here
    const maxPossible = prevLimit + maxSteps;
    const newLimit = Math.min(rLimit, maxPossible);
    restrictions[i][1] = newLimit;

    prevIdx = rIdx;
    prevLimit = newLimit;
  }

  // Find peaks
  let currIdx = 1;
  let currHeight = 0;
  let maxHeight = 0;

  for (const [rIdx, rHeight] of restrictions) {
    const maxSteps = rIdx - currIdx;
    const maxPossible = currHeight + maxSteps;

    // If maxSteps is in limit (climb all the way)
    if (maxPossible <= rHeight) {
      currIdx = rIdx;
      currHeight = maxPossible;
      maxHeight = Math.max(maxHeight, currHeight);
      continue;
    }

    // If maxSteps over limit
    // Subtract the minimum steps required to change height
    // The remainder/2 is the possible climb (1 up, 1 down)
    const minChange = Math.abs(currHeight - rHeight);
    const extraSteps = maxSteps - minChange;
    const extraIncrease = Math.floor(extraSteps / 2);

    maxHeight = Math.max(
      maxHeight,
      Math.max(currHeight, rHeight) + extraIncrease,
    );

    currIdx = rIdx;
    currHeight = rHeight;
  }

  return maxHeight;
}

// @lc code=end
// const rez = maxBuilding(10, [
//   [5, 3],
//   [2, 5],
//   [7, 4],
//   [10, 3],
// ]);

// const rez = maxBuilding(5, [[2,1],[4,1]]);

const rez = maxBuilding(10, [
  [8, 5],
  [9, 0],
  [6, 2],
  [4, 0],
  [3, 2],
  [10, 0],
  [5, 3],
  [7, 3],
  [2, 4],
]);

console.log(rez);
