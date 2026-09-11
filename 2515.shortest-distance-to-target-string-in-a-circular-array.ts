/*
 * @lc app=leetcode id=2515 lang=typescript
 *
 * [2515] Shortest Distance to Target String in a Circular Array
 */

// @lc code=start
function closestTarget(
  words: string[],
  target: string,
  startIndex: number,
): number {
  if (words[startIndex] === target) return 0;

  let steps = 0;
  while (++steps) {
    const fwd = (startIndex + steps) % words.length;
    const bck = (startIndex - steps + words.length) % words.length;
    if (fwd === startIndex) return -1;
    if (words[fwd] === target || words[bck] === target) return steps;
  }
}
// @lc code=end
const rez = [];
rez.push(closestTarget(["hello", "i", "am", "leetcode", "hello"], "hello", 1));
rez.push(closestTarget(["a", "b", "leetcode"], "leetcode", 0));
rez.push(closestTarget(["i", "eat", "leetcode"], "ate", 0));
rez.push(closestTarget(["target", "target", "a", "b", "start"], "target", 4));
console.log(rez);
