/*
 * @lc app=leetcode id=3501 lang=typescript
 *
 * [3501] Maximize Active Section with Trade II
 */

// @lc code=start
function maxActiveSectionsAfterTrade(s: string, queries: number[][]): number[] {
  let pairs: number[] = [];
  let prevInactive: number = 0;
  let currInactive: number = 0;
  let activeCount: number = 0;
  let currStatus: string = s[0];

  for (const x of s) {
    if (currStatus === "0" && x === "1") {
      if (prevInactive !== 0) pairs.push(prevInactive + currInactive);
      prevInactive = currInactive;
      currInactive = 0;
    }
    if (x === "1") {
      activeCount++;
    } else {
      currInactive++;
    }
    currStatus = x;
  }

  if (s[s.length - 1] !== "1" && prevInactive !== 0)
    pairs.push(prevInactive + currInactive);

  console.log(pairs);
}
// @lc code=end
const rez = [];
rez.push(
  maxActiveSectionsAfterTrade("1000100", [
    [1, 5],
    [0, 6],
    [0, 4],
  ]),
);
rez.push(
  maxActiveSectionsAfterTrade("01010", [
    [0, 3],
    [1, 4],
    [1, 3],
  ]),
);
console.log(rez);
