/*
 * @lc app=leetcode id=1621 lang=typescript
 *
 * [1621] Number of Sets of K Non-Overlapping Line Segments
 */

// @lc code=start
const MOD = 1_000_000_007n;

function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
  let result = 1n;

  base %= mod;
  while (exp > 0) {
    if (exp & 1n) result = (result * base) % mod;
    base = (base * base) % mod;
    exp >>= 1n;
  }

  return result;
}

function fact(n: number): bigint {
  let rez = 1n;
  for (let i = BigInt(n); i > 1; i--) rez = (rez * i) % BigInt(MOD);
  return rez;
}

function modInverse(x: bigint): bigint {
  return modPow(x, MOD - 2n, MOD);
}

function NchooseM(n: number, m: number): number {
  // Supposed to be fact(n) / (fact(n-m) * fact(m))
  // However, modding breaks division, have to use modInverse
  return Number((fact(n) * modInverse((fact(n - m) * fact(m)) % MOD)) % MOD);
}

function numberOfSets(n: number, k: number): number {
  return NchooseM(n - 1 + k, 2 * k);
}

// @lc code=end
const rez = [];
rez.push(numberOfSets(4, 2));
rez.push(numberOfSets(3, 1));
rez.push(numberOfSets(30, 7));
console.log(rez);
