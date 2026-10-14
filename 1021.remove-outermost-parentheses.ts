/*
 * @lc app=leetcode id=1021 lang=typescript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
function removeOuterParentheses(s: string): string {
  let rez: string = "";
  let open: number = 0;
  let head: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
      continue;
    }

    if (--open === 0) {
      rez += s.slice(head + 1, i);
      head = i + 1;
    }
  }

  return rez;
}
// @lc code=end
const rez = [];
rez.push(removeOuterParentheses("(()())(())"));
console.log(rez);
