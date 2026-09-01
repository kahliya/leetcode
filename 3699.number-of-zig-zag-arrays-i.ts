/*
 * @lc app=leetcode id=3699 lang=typescript
 *
 * [3699] Number of ZigZag Arrays I
 */

// @lc code=start

function zigZagArrays(n: number, l: number, r: number): number {
  // The number of zigzags of length x from idx y will always be the same
  // Only difference is the direction up/down
  // Use DP to calculate upwards until the length n

  // >> Length=x
  //      -> zigzagDown[idx] = (prev) zigzagUp[(all idx > x)]
  //      -> zigzagUp[idx] = (prev) zigzagDown[(all idx < x)]

  const MOD = 1_000_000_007;

  const zigzagDown: number[] = new Array(r - l + 1).fill(1);
  const zigzagUp: number[] = new Array(r - l + 1).fill(1);

  const pfSumDown: number[] = [];
  const pfSumUp: number[] = [];

  for (let len = 2; len <= n; len++) {
    // Calculate the prefix sum for prev len
    let currSumDown = 0;
    let currSumUp = 0;

    for (let x = 0; x <= r - l; x++) {
      currSumDown += zigzagDown[x];
      currSumUp += zigzagUp[x];

      pfSumDown[x] = currSumDown;
      pfSumUp[x] = currSumUp;
    }

    zigzagDown[r - l] = 0;
    zigzagUp[0] = 0;
    for (let x = 0; x <= r - l - 1; x++) {
      zigzagDown[x] = (pfSumUp[r - l] - pfSumUp[x] + MOD) % MOD;
    }
    for (let x = 1; x <= r - l; x++) {
      zigzagUp[x] = pfSumDown[x - 1] % MOD;
    }
  }

  let total = 0;
  for (let x = 0; x <= r - l; x++) {
    total += (zigzagDown[x] + zigzagUp[x]) % MOD;
  }

  return total % MOD;
}

// @lc code=end
// const rez = zigZagArrays(3, 4, 5); // 2
// const rez = zigZagArrays(3, 5, 7); // 10
// const rez = zigZagArrays(7, 9, 39); // 650716800
// const rez = zigZagArrays(10, 35, 105); // 988854964
// const rez = zigZagArrays(11, 30, 103); // 585617341
// const rez = zigZagArrays(34, 708, 1030); // 454343494
// const rez = zigZagArrays(82, 245, 1409); // 372672333
// const rez = zigZagArrays(82, 1156, 1857); // 114464373
// const rez = zigZagArrays(260, 1651, 1840); // 32325127
// const rez = zigZagArrays(259, 700, 1695); // 521703142
// const rez = zigZagArrays(461, 1256, 1553); // 904106364
// const rez = zigZagArrays(1610, 841, 1604); // 38081747
const rez = zigZagArrays(2000, 2, 1999); // 110774199
console.log(rez);
