/*
 * @lc app=leetcode id=940 lang=typescript
 *
 * [940] Distinct Subsequences II
 */

// @lc code=start
function distinctSubseqII(s: string): number {
  // idea: dp[i] = # of subsequences from s[0] to s[i]

  // abab
  // dp[0] = [a]
  // dp[1] = [a, b, ab]
  // dp[2] = [a, b, ab, aa, ba, aba]
  // dp[3]* = [a, b, ab, aa, ba, aba, ab, bb, abb, aab, bab, abab]
  // dp[3]* = [a, b, ab, aa, ba, aba, bb, abb, aab, bab, abab]

  // aaaa
  // dp[0] = [a]
  // dp[1] = [a, aa]
  // dp[2]* = [a, aa, aa, aaa]
  // dp[2] = [a, aa, aaa]
  // dp[3]* = [a, aa, aaa, aa, aaa, aaaa]
  // dp[3] = [a, aa, aaa, aaaa]

  // derive from the above,
  // dp[i] = (2 * dp[i-1]) - (delta[char]) + (1 if new char)
  // delta tracks the # subsequences added by the prev occurrence of this char

  const MOD = Math.pow(10, 9) + 7;
  const BASE = 97;
  const delta: number[] = Array(26).fill(-1);

  const dp: number[] = [];
  dp[0] = 1;
  delta[s[0].charCodeAt(0) - BASE] = 0;

  for (let i = 1; i < s.length; i++) {
    const c = s[i].charCodeAt(0) - BASE;
    const exists = delta[c] !== -1;
    const prevDelta = exists ? delta[c] : 0;

    dp[i] = (2 * dp[i - 1] - prevDelta + MOD) % MOD;
    delta[c] = (prevDelta + dp[i] - dp[i - 1]) % MOD;

    if (!exists) dp[i]++;
  }

  return dp[s.length - 1];
}
// @lc code=end
const rez = [];
rez.push(distinctSubseqII("abc"));
rez.push(distinctSubseqII("aba"));
rez.push(distinctSubseqII("aaa"));
rez.push(
  distinctSubseqII(
    "zchmliaqdgvwncfatcfivphddpzjkgyygueikthqzyeeiebczqbqhdytkoawkehkbizdmcnilcjjlpoeoqqoqpswtqdpvszfaksn",
  ),
);
rez.push(
  distinctSubseqII(
    "blljuffdyfrkqtwfyfztpdiyktrhftgtabxxoibcclbjvirnqyynkyaqlxgyybkgyzvcahmytjdqqtctirnxfjpktxmjkojlvvrr",
  ),
);
rez.push(
  distinctSubseqII(
    "bkxrmmpojwebxtmnojajuespwxxyanxahpvhxmfnuhvpakdxbxxcennrkzxczlskijhypenxwahkvpxfeslnscgeamnhelinidjn",
  ),
);

rez.push(
  distinctSubseqII(
    "pgamrjnsfcqizchxhaawwnzulopnhnujagbkcqjoppjejmmcykjkggnwvaraecglrhxsggyaifdnbliwndhvprmozdduzzxmskvokzckhugsdzbmnfykeywfcwenlxtlakelxxnfieiutlusqhbfymytxzbmqmahunjgeaolcuznhpodiqukrrgsoxpsnmzlhprslqurnqbhsjrxzavamftpvodataplkewcouzbwlftzuvkpabfqytcpomlwjfsfpnlgvsqdzpuemtclxbxwsypfxevxwmkoqhxvrovlmmv",
  ),
);
console.log(rez);
