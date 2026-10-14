/*
 * @lc app=leetcode id=2897 lang=typescript
 *
 * [2897] Apply Operations on Array to Maximize Sum of Squares
 */

// @lc code=start
function maxSum(nums: number[], k: number): number {
  // Read the editorial, no way I would've thought of this damn.
  // Idea:
  //    > the optimal AND/OR operations will move the 1 bits in one direction
  //    > e.g. for a & b, a will be minimized while b is maximised
  //    > since the number of operations is unlimited
  //    > we simplify this by just counting the number of bits in each pos
  //    > then greedily build the k largest numbers

  const MOD = 1_000_000_007;
  const MOD_BIG = BigInt(MOD);

  // Step 1: Count bits in each position
  const bits = new Uint32Array(30); // 10^9 takes 30 bits
  for (const n of nums) {
    for (let i = 0; 1 << i <= n; i++) {
      if (n & (1 << i)) bits[i] += 1;
    }
  }

  // Step 2: Greedy construction of the k largest numbers
  let rez = 0;
  for (let i = 0; i < k; i++) {
    let curr = 0;
    for (let x = 0; x < bits.length; x++) {
      if (!bits[x]) continue;
      curr += 1 << x;
      bits[x]--;
    }

    rez = (rez + Number(BigInt(curr) ** 2n % MOD_BIG)) % MOD;
  }

  return rez;
}
// @lc code=end
const rez = [];
rez.push(maxSum([2, 6, 5, 8], 2));
rez.push(maxSum([4, 5, 4, 7], 3));
console.log(rez);

// 0010
// 0110
// 0101
// 1000
