/*
 * @lc app=leetcode id=3014 lang=typescript
 *
 * [3014] Minimum Number of Pushes to Type Word I
 */

// @lc code=start
function minimumPushes(word: string): number {
  const ASCII_BASE: number = 97;

  let chars: number[] = Array(26).fill(0);
  for (const c of word) {
    const x = c.charCodeAt(0) - ASCII_BASE;
    chars[x]++;
  }

  chars = chars.sort((a, b) => b - a);

  let cost = 0;
  for (let i = 0; i < chars.length; i++) {
    const pushes = Math.floor(i / 8) + 1;
    cost += chars[i] * pushes;
  }

  return cost;
}
// @lc code=end
const rez = [];
rez.push(minimumPushes("xycdefghij"));
console.log(rez);
