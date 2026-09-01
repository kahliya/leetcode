/*
 * @lc app=leetcode id=3517 lang=typescript
 *
 * [3517] Smallest Palindromic Rearrangement I
 */

// @lc code=start
function smallestPalindrome(s: string): string {
  const ASCII_BASE = 97;
  const buckets = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const b = c.charCodeAt(0) - ASCII_BASE;
    buckets[b]++;
  }

  let middle = "";
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] % 2 !== 0) middle = String.fromCharCode(i + ASCII_BASE);
  }

  let left = "";
  for (let i = 0; i < buckets.length; i++) {
    const x = buckets[i];
    const c = String.fromCharCode(i + ASCII_BASE);
    left += c.repeat(x / 2);
  }

  let right = left.split("").reverse().join("");
  return left + middle + right;
}
// @lc code=end
const rez = [];
rez.push(smallestPalindrome("babab"));
rez.push(smallestPalindrome("daccad"));
rez.push(smallestPalindrome("yey"));
rez.push(smallestPalindrome("jjejj"));
console.log(rez);
