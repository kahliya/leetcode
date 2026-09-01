/*
 * @lc app=leetcode id=2904 lang=typescript
 *
 * [2904] Shortest and Lexicographically Smallest Beautiful String
 */

// @lc code=start
function shortestBeautifulSubstring(s: string, k: number): string {
  let ones: number = 0;
  let headIdx: number = 0;
  let curr: string = "";
  let result: string = "";

  while (s[headIdx] === "0") headIdx++;
  for (let i = headIdx; i < s.length; i++) {
    const c = s[i];

    if (curr.length === 0 && c === "0") continue;
    if (c === "1") ones++;
    curr += c;

    if (ones === k) {
      if (
        result === "" ||
        curr.length < result.length ||
        (curr.length === result.length && curr < result)
      ) {
        result = curr;
      }

      ones--;
      do {
        curr = curr.slice(1);
      } while (s[++headIdx] === "0");
    }
  }

  return result;
}
// @lc code=end
const rez = [];
rez.push(shortestBeautifulSubstring("100011001", 3));
rez.push(shortestBeautifulSubstring("1011", 2));
rez.push(shortestBeautifulSubstring("000", 1));
rez.push(shortestBeautifulSubstring("11000111", 1));
rez.push(shortestBeautifulSubstring("01011101000111110", 5));
rez.push(shortestBeautifulSubstring("1100100101011001001", 7));
console.log(rez);
