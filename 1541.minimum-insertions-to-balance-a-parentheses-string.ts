/*
 * @lc app=leetcode id=1541 lang=typescript
 *
 * [1541] Minimum Insertions to Balance a Parentheses String
 */

// @lc code=start
function minInsertions(s: string): number {
  let moves: number = 0;
  let open: number = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (open & 1) {
        open--;
        moves++;
      }
      open += 2;
      continue;
    }

    if (--open < 0) {
      moves++;
      open += 2;
    }
  }

  return moves + open;
}
// @lc code=end

const rez = [];
rez.push(minInsertions("(()))"));
rez.push(minInsertions("())"));
rez.push(minInsertions("))())("));
rez.push(minInsertions("()()()()()("));
rez.push(minInsertions("(()))(()))()())))"));
console.log(rez);
