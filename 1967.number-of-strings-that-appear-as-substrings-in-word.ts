/*
 * @lc app=leetcode id=1967 lang=typescript
 *
 * [1967] Number of Strings That Appear as Substrings in Word
 */

// @lc code=start
function numOfStrings(patterns: string[], word: string): number {
  return patterns.filter(a => word.includes(a)).length
}

// @lc code=end
const rez = numOfStrings(["a", "abc", "bc", "d"], "abc");
console.log(rez);
