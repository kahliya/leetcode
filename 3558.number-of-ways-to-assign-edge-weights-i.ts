/*
 * @lc app=leetcode id=3558 lang=typescript
 *
 * [3558] Number of Ways to Assign Edge Weights I
 */

// @lc code=start

function modPow(base: bigint, exp: bigint, mod: bigint): number {
  let result = 1n;

  base %= mod;
  while (exp > 0) {
    if (exp & 1n) result = (result * base) % mod;
    base = (base * base) % mod;
    exp >>= 1n;
  }

  return Number(result);
}

function assignEdgeWeights(edges: number[][]): number {
  let known: Record<number, number[]> = {};
  for (const [a, b] of edges) {
    if (!(a in known)) known[a] = [];
    if (!(b in known)) known[b] = [];

    known[a].push(b);
    known[b].push(a);
  }

  let maxDepth: number = -1;
  let queue: number[] = [1];
  let done: Set<number> = new Set([1]);

  while (queue.length > 0) {
    const next: number[] = [];

    for (const node of queue) {
      for (const adj of known[node]) {
        if (done.has(adj)) continue;
        done.add(adj);
        next.push(adj);
      }
    }

    queue = next;
    maxDepth++;
  }

  return modPow(2n, BigInt(maxDepth-1), BigInt(10**9+7))
}

// @lc code=end
const input = [
  [1, 2],
  [1, 3],
  [3, 4],
  [3, 5],
];

const rez = assignEdgeWeights(input);
console.log("rez:", rez);
