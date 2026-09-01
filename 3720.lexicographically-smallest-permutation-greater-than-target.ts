/*
 * @lc app=leetcode id=3720 lang=typescript
 *
 * [3720] Lexicographically Smallest Permutation Greater Than Target
 */

// @lc code=start
function lexGreaterPermutation(s: string, target: string): string {
  const ASCII_BASE = 97;
  const sChars: number[] = Array(26).fill(0);
  let rez = "";

  function stepBackOne() {
    const c = rez[rez.length - 1];
    sChars[c.charCodeAt(0) - ASCII_BASE]++;
    rez = rez.slice(0, rez.length - 1);
    target = c + target;
  }

  for (const c of s) {
    const x = c.charCodeAt(0) - ASCII_BASE;
    sChars[x]++;
  }

  for (const c of target) {
    const x = c.charCodeAt(0) - ASCII_BASE;
    if (sChars[x] === 0) break;
    sChars[x]--;
    rez += c;
    target = target.slice(1);
  }

  if (target.length === 0) stepBackOne();
  while (true) {
    const nextX = target[0].charCodeAt(0) - ASCII_BASE;
    let found = false;

    for (let i = nextX + 1; i < sChars.length; i++) {
      if (sChars[i] === 0) continue;
      found = true;
      sChars[i]--;
      rez += String.fromCharCode(i + ASCII_BASE);
      break;
    }

    if (found) break;
    if (rez.length === 0) return "";
    stepBackOne();
  }

  for (let i = 0; i < sChars.length; i++) {
    rez += String.fromCharCode(i + ASCII_BASE).repeat(sChars[i]);
  }

  return rez;
}

// @lc code=end
const rez = [];
rez.push(lexGreaterPermutation("abc", "bba"));
rez.push(lexGreaterPermutation("leet", "code"));
rez.push(lexGreaterPermutation("baba", "bbaa"));
rez.push(lexGreaterPermutation("y", "z"));
rez.push(lexGreaterPermutation("bac", "bad"));
rez.push(lexGreaterPermutation("abb", "baa"));
console.log(rez);
