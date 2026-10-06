/*
 * @lc app=leetcode id=921 lang=typescript
 *
 * [921] Minimum Add to Make Parentheses Valid
 */

// @lc code=start
function minAddToMakeValid(s: string): number {
  let open: number = 0;
  let moves: number = 0;

  for (const c of s) c === "(" ? open++ : open ? open-- : moves++;
  return moves + open;
}
// @lc code=end
const rez = [];
rez.push(minAddToMakeValid("())"));
rez.push(minAddToMakeValid("((("));
console.log(rez);
