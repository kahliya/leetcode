/*
 * @lc app=leetcode id=3838 lang=typescript
 *
 * [3838] Weighted Word Mapping
 */

// @lc code=start
function mapWordWeights(words: string[], weights: number[]): string {
  const ASCII_A: number = 97;

  let rez = [];
  for (const word of words) {
    let wordWeight = 0;
    for (const c of word) {
      const charPos = c.charCodeAt(0) - ASCII_A;
      wordWeight += weights[charPos];
    }
    
    rez.push(String.fromCharCode(ASCII_A + (25-(wordWeight%26))));
  }

  return rez.join("");
}

// @lc code=end
const rez = mapWordWeights(
  ["abcd", "def", "xyz"],
  [
    5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7,
    7, 2,
  ],
);
console.log(rez);
