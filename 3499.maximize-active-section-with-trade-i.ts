/*
 * @lc app=leetcode id=3499 lang=typescript
 *
 * [3499] Maximize Active Section with Trade I
 */

// @lc code=start
function maxActiveSectionsAfterTrade(s: string): number {
  let prevInactive: number = 0;
  let currInactive: number = 0;
  let activeCount: number = 0;
  let currStatus: string = s[0];

  let max = 0;
  for (const x of s) {
    if (currStatus === "0" && x === "1") {
      if (prevInactive !== 0) max = Math.max(max, prevInactive + currInactive);
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
    max = Math.max(max, prevInactive + currInactive);

  return activeCount + max;
}
// @lc code=end
// const rez = maxActiveSectionsAfterTrade("0100"); // 4
const rez = maxActiveSectionsAfterTrade("1000100"); // 7
// const rez = maxActiveSectionsAfterTrade("01010"); // 4
// const rez = maxActiveSectionsAfterTrade("01"); // 1
// const rez = maxActiveSectionsAfterTrade("0"); // 0
console.log(rez);
