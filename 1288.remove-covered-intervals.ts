/*
 * @lc app=leetcode id=1288 lang=typescript
 *
 * [1288] Remove Covered Intervals
 */

// @lc code=start
function removeCoveredIntervals(intervals: number[][]): number {
  intervals = intervals.toSorted((a, b) => a[0] - b[0]);
  let head = intervals[0][0];
  let tail = intervals[0][1];

  let count = 1;
  for (const intv of intervals) {
    // Scenario 1: Covered
    if (intv[0] >= head && intv[1] <= tail) continue;

    // Scenario 2: Same head, further tail (covers a prev interval)
    // Count does not change
    if (intv[0] === head && intv[1] > tail) tail = intv[1];

    // Scenario 3: Further head, further tail
    if (intv[0] > head && intv[1] > tail) {
      head = intv[0];
      tail = intv[1];
      count++;
    }
  }

  return count;
}
// @lc code=end
const rez = removeCoveredIntervals([
  [1, 4],
  [3, 6],
  [2, 8],
]);
console.log(rez);
