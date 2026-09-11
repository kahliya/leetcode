/*
 * @lc app=leetcode id=115 lang=typescript
 *
 * [115] Distinct Subsequences
 */

// @lc code=start
function numDistinct(s: string, t: string): number {
  const indexes: Map<string, number[]> = new Map();
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (!indexes.has(c)) indexes.set(c, []);
    indexes.get(c)!.push(i);
  }

  let dp: number[] = Array(t.length).fill(0);
  for (const c of s) {
    const x = indexes.get(c);
    if (!x) continue;

    for (let i = x.length - 1; i >= 0; i--) {
      const idx = x[i];
      dp[idx] += idx === 0 ? 1 : dp[idx - 1];
    }
  }

  return dp[dp.length - 1];
}
// @lc code=end
const rez = [];
rez.push(numDistinct("rabbbit", "rabbit"));
rez.push(numDistinct("babgbag", "bag"));
console.log(rez);
