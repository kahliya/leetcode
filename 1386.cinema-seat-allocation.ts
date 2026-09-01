/*
 * @lc app=leetcode id=1386 lang=typescript
 *
 * [1386] Cinema Seat Allocation
 */

// @lc code=start
function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
  reservedSeats.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  let prevRow: number = 0;
  let validBlocks: boolean[] = [false, false, false];
  let maxGrp = 0;

  function processUnblocked(currRow: number, prevRow: number): number {
    return currRow !== prevRow ? (currRow - prevRow - 1) * 2 : 0;
  }

  function processBlocked(validBlocks: boolean[]): number {
    if (validBlocks[0] && validBlocks[2]) return 2;
    else if (validBlocks[0] || validBlocks[1] || validBlocks[2]) return 1;
    return 0;
  }

  for (const s of reservedSeats) {
    if (prevRow !== s[0]) {
      maxGrp += processUnblocked(s[0], prevRow);
      maxGrp += processBlocked(validBlocks);

      prevRow = s[0];
      validBlocks = [true, true, true];
    }

    if (s[1] >= 2 && s[1] <= 5) validBlocks[0] = false;
    if (s[1] >= 4 && s[1] <= 7) validBlocks[1] = false;
    if (s[1] >= 6 && s[1] <= 9) validBlocks[2] = false;
  }

  maxGrp += processUnblocked(n + 1, prevRow);
  maxGrp += processBlocked(validBlocks);
  return maxGrp;
}
// @lc code=end
const rez = [];
rez.push(
  maxNumberOfFamilies(3, [
    [1, 2],
    [1, 3],
    [1, 8],
    [2, 6],
    [3, 1],
    [3, 10],
  ]),
); // 4

rez.push(
  maxNumberOfFamilies(2, [
    [2, 1],
    [1, 8],
    [2, 6],
  ]),
); // 2

rez.push(
  maxNumberOfFamilies(4, [
    [4, 3],
    [1, 4],
    [4, 6],
    [1, 7],
  ]),
); // 4

rez.push(maxNumberOfFamilies(3, [[2, 3]])); // 3

console.log(rez);
