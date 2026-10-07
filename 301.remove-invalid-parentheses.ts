/*
 * @lc app=leetcode id=301 lang=typescript
 *
 * [301] Remove Invalid Parentheses
 */

// @lc code=start
function removeInvalidParentheses(s: string): string[] {
  // Given theres only 20 parenthesis max, can assume it's an exponential soln

  // Step 1. Determine the minimum number (k) to remove
  let open: number = 0;
  let minMoves: number = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c !== "(" && c !== ")") continue;
    if (c === "(") open++;
    else if (open > 0) open--;
    else minMoves++;
  }

  minMoves += open;
  if (minMoves === 0) return [s];

  // Step 2. Iterate string, removing exactly k parenthesis
  const valid: Set<string> = new Set();
  function iterate(startIdx: number, skips: number, curr: string) {
    if (minMoves - skips > s.length - startIdx) return;
    if (startIdx > s.length && skips !== minMoves) return;
    if (skips === minMoves) {
      validate(curr, startIdx);
      return;
    }

    let i = startIdx;
    for (; i < s.length; i++) {
      if (s[i] === "(" || s[i] === ")") break;
      curr += s[i];
    }

    iterate(i + 1, skips + 1, curr); // skip this
    iterate(i + 1, skips, curr + s[i]); // don't skip
  }

  function validate(candidate: string, nextIdx: number) {
    let m = 0;
    let op = 0;
    for (const c of candidate) {
      if (c !== "(" && c !== ")") continue;
      if (c === "(") op++;
      else if (op > 0) op--;
      else return;
    }

    for (let i = nextIdx; i < s.length; i++) {
      const c = s[i];
      candidate += c;
      if (c !== "(" && c !== ")") continue;
      if (c === "(") op++;
      else if (op > 0) op--;
      else return;
    }

    if (m + op === 0) valid.add(candidate);
  }

  iterate(0, 0, "");
  return [...valid];
}
// @lc code=end
const rez = [];
rez.push(removeInvalidParentheses("()())()"));
rez.push(removeInvalidParentheses("(a)())()"));
rez.push(removeInvalidParentheses(")("));
rez.push(removeInvalidParentheses("(()"));
rez.push(removeInvalidParentheses(")(f"));
console.log(rez);
