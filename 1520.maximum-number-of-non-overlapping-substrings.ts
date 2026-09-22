/*
 * @lc app=leetcode id=1520 lang=typescript
 *
 * [1520] Maximum Number of Non-Overlapping Substrings
 */

// @lc code=start
function maxNumOfSubstrings(s: string): string[] {
  const ASCII = 97;

  // Get all first & last occurrences first
  const intervals: number[][] = Array(26);
  for (let i = 0; i < s.length; i++) {
    const x = s[i].charCodeAt(0) - ASCII;
    if (!intervals[x]) intervals[x] = [i, i];
    intervals[x][1] = i;
  }

  // Expand until all are valid intervals
  const stableIntervals = [];
  for (let i = 0; i < intervals.length; i++) {
    if (!intervals[i]) continue;
    let head = intervals[i][0];
    let tail = intervals[i][1];
    let invalid = false;

    for (let j = head; j <= tail; j++) {
      const x = s[j].charCodeAt(0) - ASCII;
      const headX = intervals[x][0];
      const tailX = intervals[x][1];
      if (headX < head) {
        invalid = true;
        break;
      }
      if (tailX > tail) tail = tailX;
    }

    if (!invalid) stableIntervals.push([head, tail]);
  }

  // Sort for greedy extraction of non-overlapping intervals
  stableIntervals.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));

  const tmp = [];
  let prevTail = -1;
  for (let i = 0; i < stableIntervals.length; i++) {
    const curr = stableIntervals[i];
    if (!curr) break;
    if (curr[0] > prevTail) {
      tmp.push(curr);
      prevTail = curr[1];
    }
  }

  const rez = [];
  for (let i = 0; i < tmp.length; i++) {
    const t = tmp[i];
    rez.push(s.substring(t[0], t[1] + 1));
  }

  return rez;
}

// @lc code=end
const rez = [];
rez.push(maxNumOfSubstrings("adefaddaccc"));
rez.push(maxNumOfSubstrings("abbaccd"));
rez.push(maxNumOfSubstrings("dzdabazbbccd"));
rez.push(maxNumOfSubstrings("cabcccbaa"));
rez.push(maxNumOfSubstrings("bmhbgcfhadjlgiodimohjofdfhaiinmhngmah"));
console.log(rez);
