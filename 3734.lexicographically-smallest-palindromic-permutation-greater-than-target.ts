/*
 * @lc app=leetcode id=3734 lang=typescript
 *
 * [3734] Lexicographically Smallest Palindromic Permutation Greater Than Target
 */

// @lc code=start

function lexPalindromicPermutation(s: string, t: string): string {
  const ASCII_BASE = 97;
  const sChars: number[] = Array(26).fill(0);

  let target = t;
  let rez = "";

  function backtrackOne() {
    const c = rez[rez.length - 1];
    sChars[c.charCodeAt(0) - ASCII_BASE] += 2;
    rez = rez.slice(0, rez.length - 1);
    target = c + target;
  }

  // Count char freqs
  for (const c of s) {
    const x = c.charCodeAt(0) - ASCII_BASE;
    sChars[x]++;
  }

  // Sanity check, can s even be a palindrome?
  let odd = 0;
  let middle = "";
  for (let i = 0; i < sChars.length; i++) {
    if (sChars[i] % 2 !== 0) {
      odd++;
      middle = String.fromCharCode(i + ASCII_BASE);
    }
  }
  if (odd > s.length % 2) return "";

  // Match up to first half of target
  for (let i = 0; i < t.length / 2; i++) {
    const c = target[0];
    const x = c.charCodeAt(0) - ASCII_BASE;
    if (sChars[x] < 2) break;
    sChars[x] -= 2;
    rez += c;
    target = target.slice(1);
  }

  if (rez.length === Math.floor(t.length / 2)) {
    const tmp = rez + middle + [...rez].reverse().join("");
    if (tmp > t) return tmp;
  }

  if (target.length === Math.floor(t.length / 2)) backtrackOne();

  while (true) {
    const nextX = target[0].charCodeAt(0) - ASCII_BASE;
    let found = false;

    for (let i = nextX + 1; i < sChars.length; i++) {
      if (sChars[i] < 2) continue;
      found = true;
      sChars[i] -= 2;
      rez += String.fromCharCode(i + ASCII_BASE);
      break;
    }

    if (found) break;
    if (rez.length === 0) return "";
    backtrackOne();
  }

  for (let i = 0; i < sChars.length; i++) {
    rez += String.fromCharCode(i + ASCII_BASE).repeat(sChars[i] / 2);
  }

  return rez + middle + [...rez].reverse().join("");
}
// @lc code=end
const rez = [];
rez.push(lexPalindromicPermutation("baba", "abba")); // baab
rez.push(lexPalindromicPermutation("abc", "abb")); // ""
rez.push(lexPalindromicPermutation("aac", "abb")); // aca
rez.push(lexPalindromicPermutation("bbb", "aaa")); // bbb
rez.push(lexPalindromicPermutation("bb", "ba")); // bb
rez.push(lexPalindromicPermutation("aabb", "abaa")); // abba
rez.push(lexPalindromicPermutation("aabbccdd", "abcdabcd")); // abcddcba
rez.push(lexPalindromicPermutation("abbb", "aaaa")); // ""
console.log(rez);
