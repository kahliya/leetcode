/*
 * @lc app=leetcode id=1358 lang=typescript
 *
 * [1358] Number of Substrings Containing All Three Characters
 */

// @lc code=start
function numberOfSubstrings(s: string): number {
  let unusedIdx = 0;
  let count = 0;

  let freq: Record<string, number> = {
    a: 0,
    b: 0,
    c: 0,
  };

  let active: boolean = false;

  freq[s[0]]++;

  for (let i = 1; i < s.length; i++) {
    if (!active && s[i] === s[i - 1]) {
      freq[s[i]] = 1;
      continue;
    } else {
      active = true;
      freq[s[i]]++;
    }

    while (freq["a"] >= 1 && freq["b"] >= 1 && freq["c"] >= 1) {
      const substringLen = freq["a"] + freq["b"] + freq["c"];
      const leftEdge = i - (substringLen - 1);
      const leftLen = leftEdge - unusedIdx + 1;
      const rightLen = s.length - i;

      count += leftLen * rightLen;
      unusedIdx = leftEdge + 1;
      freq[s[leftEdge]]--;
    }
  }

  return count;
}

// @lc code=end
// const rez = numberOfSubstrings("abcabc"); // 10
// const rez = numberOfSubstrings("aaacb"); // 3
// const rez = numberOfSubstrings("abc"); // 1
const rez = numberOfSubstrings("aaaaccbaa"); // 16
console.log(rez);

// Test: aaaaccbaa

// Once you've found a match,
// Then multiply # of characters to the right w/ # of UNUSED characters to the left (+1 for itself)
// ---accb HIT (used @ 0)
// ---accba
// ---accbaa
// --aaccb
// --aaccba
// --aaccbaa
// -aaaccb
// -aaaccba
// -aaaccbaa
// aaaaccb
// aaaaccba
// aaaaccbaa

// Once done, previous characters can no longer be used
// xxxxccba HIT (used @ 4)
// xxxxccbaa
