/*
 * @lc app=leetcode id=3518 lang=typescript
 *
 * [3518] Smallest Palindromic Rearrangement II
 */

// @lc code=start
const ASCII_BASE = 97;
const knownFacts: bigint[] = [];

function factorial(n: number): bigint {
  const k = knownFacts[n];
  if (k) return k;

  let result = 1n;
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
    knownFacts[i] = result;
  }
  return result;
}

function getPermutations(
  slots: number,
  buckets: number[],
  possibleChars: string[],
): bigint {
  let total = factorial(slots);
  for (const c of possibleChars) {
    const cAscii = c.charCodeAt(0) - ASCII_BASE;
    const x = buckets[cAscii];
    total /= factorial(x);
  }

  return total === 0n ? 1n : total;
}

function smallestPalindrome(s: string, k: number): string {
  if (s.length <= 1) return s;

  const buckets = Array(26).fill(0);
  const halfLen = Math.trunc(s.length / 2);
  const middle = s.length % 2 !== 0 ? s[halfLen] : "";
  for (let i = 0; i < halfLen; i++) {
    const c = s[i];
    const b = c.charCodeAt(0) - ASCII_BASE;
    buckets[b]++;
  }

  const possibleChars = [];
  for (let i = 0; i < buckets.length; i++) {
    const x = buckets[i];
    if (x !== 0) possibleChars.push(String.fromCharCode(i + ASCII_BASE));
  }

  // Idea: Use permutations to calculate whether the k-th arrangement is in this block
  // > Lock one character, calculate the permutations (m) of the remaining chars
  // > If k > m, k -= m, then replace char with next lexicographically largest char
  // > If k <= remaining, locked char is correct, continue to next slot

  // If permuting all chars still can't hit k, k is not possible, early return.
  if (getPermutations(halfLen, buckets, possibleChars) < k) return "";
  let charIdx = 0;
  let locked = possibleChars[0];
  let bigK = BigInt(k);

  let thisPerm = getPermutations(halfLen, buckets, possibleChars);

  while (locked.length != halfLen) {
    const thisBucket = possibleChars[charIdx].charCodeAt(0) - ASCII_BASE;
    const x = buckets[thisBucket];
    const loopPerm =
      (thisPerm * BigInt(x)) / BigInt(halfLen - locked.length + 1);

    if (loopPerm >= bigK) {
      // Locking current char & move to next char slot
      buckets[thisBucket]--;
      if (buckets[thisBucket] === 0) possibleChars.splice(charIdx, 1);
      locked += possibleChars[0];
      charIdx = 0;
      thisPerm = loopPerm;
    } else {
      // Replace locked char with next possible one
      bigK -= loopPerm;
      charIdx++;
      locked = locked.slice(0, -1) + possibleChars[charIdx];
    }
  }

  return locked + middle + locked.split("").reverse().join("");
}

// @lc code=end
const rez = [];
rez.push(smallestPalindrome("abba", 2));
rez.push(smallestPalindrome("aa", 2));
rez.push(smallestPalindrome("bacab", 1));
rez.push(smallestPalindrome("o", 1));
rez.push(smallestPalindrome("xxnfnxx", 3));
rez.push(smallestPalindrome("ztyzzytz", 15));
rez.push(smallestPalindrome("kkkk", 1));
rez.push(smallestPalindrome("aaaabbbbbbaaaa", 34));
console.log(rez);
