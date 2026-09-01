/*
 * @lc app=leetcode id=3614 lang=typescript
 *
 * [3614] Process String with Special Operations II
 */

// @lc code=start
function processStr(s: string, k: number): string {
  let lengths: number[] = [];
  let currLen: number = 0;

  // Build operation stack
  for (const c of s) {
    switch (c) {
      case "*":
        currLen = Math.max(currLen - 1, 0);
        break;
      case "#":
        currLen *= 2;
        break;
      case "%":
        // do nothing
        break;
      default:
        currLen += 1;
    }

    lengths.push(currLen);
  }

  // Traverse stack
  let target = k;
  for (let i = s.length - 1; i >= 0; i--) {
    const thisOp = s[i];
    const thisLen = lengths[i];

    if (target >= thisLen) return ".";

    // If target = the current op length, that's your answer
    if (thisOp.charCodeAt(0) > 96 && target === thisLen - 1) return thisOp;

    if (thisOp === "#") {
      target %= thisLen / 2;
    } else if (thisOp === "%") {
      target = thisLen - 1 - target;
    }
  }

  return ".";
}

// @lc code=end
// const rez = processStr("nr#x#g*va#jq%", 2);
// const rez = processStr("a#bb%*", 0);
const rez = processStr("%#*gm#xib", 2);
console.log(rez);
