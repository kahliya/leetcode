/*
 * @lc app=leetcode id=3612 lang=typescript
 *
 * [3612] Process String with Special Operations I
 */

// @lc code=start
function processStr(s: string): string {
  let rez: string[] = [];

  for (const c of s) {
    if (c === "*") {
      rez.pop();
    } else if (c === "#") {
      rez = rez.concat(rez);
    } else if (c === "%") {
      rez = rez.reverse();
    } else {
      rez.push(c);
    }
  }

  return rez.join("");
}

// @lc code=end
// const rez = processStr("a#b%*");
// const rez = processStr("nr#x#g*va#jq%");
const rez = processStr("%#*gm#xib");
console.log(rez);
