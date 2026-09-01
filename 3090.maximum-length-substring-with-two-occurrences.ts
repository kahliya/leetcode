/*
 * @lc app=leetcode id=3090 lang=typescript
 *
 * [3090] Maximum Length Substring With Two Occurrences
 */

// @lc code=start
function maximumLengthSubstring(s: string): number {
  const MAX_ALLOWED = 2;
  let freq: Map<string, number> = new Map();
  let currHead: number = 0;
  let maxLen: number = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const thisFreq = (freq.get(c) ?? 0) + 1;
    freq.set(c, thisFreq);

    if (thisFreq > MAX_ALLOWED) {
      maxLen = Math.max(i - currHead, maxLen);
      do {
        freq.set(s[currHead], freq.get(s[currHead])! - 1);
        currHead++;
      } while (s[currHead - 1] !== c);
    }
  }

  maxLen = Math.max(s.length - currHead, maxLen);
  return maxLen;
}

// @lc code=end
const rez = [];
rez.push(maximumLengthSubstring("bcbbbcba"));
rez.push(maximumLengthSubstring("aaaa"));
console.log(rez);
