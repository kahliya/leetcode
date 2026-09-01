/*
 * @lc app=leetcode id=1927 lang=typescript
 *
 * [1927] Sum Game
 */

// @lc code=start
function sumGame(num: string): boolean {
  let qnsL = 0;
  let qnsR = 0;
  let sumL = 0;
  let sumR = 0;

  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] === "?") {
      qnsL++;
    } else {
      sumL += Number(num[i]);
    }
  }

  for (let i = num.length / 2; i < num.length; i++) {
    if (num[i] === "?") {
      qnsR++;
    } else {
      sumR += Number(num[i]);
    }
  }

  if (sumL < sumR && qnsL <= 1) return true;
  if (sumR < sumL && qnsR <= 1) return true;

  let qns = Math.abs(qnsL - qnsR);
  let diff = Math.abs(sumL - sumR);
  diff -= 9 * Math.floor(qns / 2);

  return (diff === 0 && qns % 2 === 0) ? false : true
}
// @lc code=end
const rez = [];
rez.push(sumGame("5023"));
rez.push(sumGame("25??"));
rez.push(sumGame("?3295???"));
rez.push(sumGame("?6?6?000?3"));
rez.push(sumGame("?9?000"));
console.log(rez);
