/*
 * @lc app=leetcode id=1189 lang=typescript
 *
 * [1189] Maximum Number of Balloons
 */

// @lc code=start
function maxNumberOfBalloons(text: string): number {
  const targets: Record<string, number> = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };

  for (const c of text) {
    if (!(c in targets)) continue;
    targets[c]++;
  }

  const B_REQ = 1;
  const A_REQ = 1;
  const L_REQ = 2;
  const O_REQ = 2;
  const N_REQ = 1;

  let balloons = 0;

  while (true) {
    targets["b"] -= B_REQ;
    targets["a"] -= A_REQ;
    targets["l"] -= L_REQ;
    targets["o"] -= O_REQ;
    targets["n"] -= N_REQ;

    if (
      targets["b"] < 0 ||
      targets["a"] < 0 ||
      targets["l"] < 0 ||
      targets["o"] < 0 ||
      targets["n"] < 0
    ) {
      break;
    }

    balloons++;
  }

  return balloons;
}

// @lc code=end
// const rez = maxNumberOfBalloons("loonbalxballpoon");
const rez = maxNumberOfBalloons("lloo");
console.log(rez);
