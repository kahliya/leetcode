/*
 * @lc app=leetcode id=3559 lang=typescript
 *
 * [3559] Number of Ways to Assign Edge Weights II
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

function assignEdgeWeights(edges: number[][], queries: number[][]): number[] {
  // Step 1: Build adjacency table
  const adj: Record<number, number[]> = {};
  for (const [a, b] of edges) {
    if (!(a in adj)) adj[a] = [];
    if (!(b in adj)) adj[b] = [];
    adj[a].push(b);
    adj[b].push(a);
  }

  // Step 2: BFS tree to get each node's parent
  // Also get each node's depth
  const nodeDepth: Record<number, number> = [];
  const ancestor: number[][] = [];
  ancestor[0] = [];

  const done: Set<number> = new Set();
  let explore: number[] = [1];
  let maxDepth: number = 0;

  while (explore.length != 0) {
    maxDepth++;
    const next: number[] = [];

    for (const node of explore) {
      done.add(node);
      nodeDepth[node] = maxDepth;
      for (const other of adj[node]) {
        if (done.has(other)) continue;
        ancestor[0][other] = node;
        next.push(other);
      }
    }

    explore = next;
  }

  // console.log("bfs -> ", ancestor, nodeDepth, maxDepth);

  // Step 3: Build the binary lift table (sparse table style)
  for (let exp = 1; 2 ** exp <= maxDepth; exp++) {
    ancestor[exp] = [];
    for (const node in ancestor[exp - 1]) {
      const thisAncestor = ancestor[exp - 1][node];
      if (!thisAncestor) continue;

      const ancient = ancestor[exp - 1][thisAncestor];
      if (!ancient) continue;

      ancestor[exp][node] = ancient;
    }
  }

  // console.log("tbl -> ", ancestor);

  // Step 4: Get yo answerz
  const rez = [];
  for (let [a, b] of queries) {
    const depthA = nodeDepth[a];
    const depthB = nodeDepth[b];
    let pathLength = 0;

    // console.log(`querying: ${a} (d-${depthA}), ${b} (d-${depthB})`);

    // Step 4A: Get a & b to matching depths first
    if (depthA !== depthB) {
      let [lower, higher] = depthA > depthB ? [a, b] : [b, a];
      const depthDiff = Math.abs(depthA - depthB);
      const diffBin = depthDiff.toString(2);
      // console.log(`> depthDiff: ${depthDiff} (bin-${diffBin})`);

      for (let idx = 0; idx < diffBin.length; idx++) {
        const c = diffBin[diffBin.length - idx - 1];
        if (c !== "1") continue;

        lower = ancestor[idx][lower];
      }

      a = lower;
      b = higher;
      pathLength += depthDiff;
    }

    // If a & b match, then one of them was an ancestor of the other
    if (a === b) {
      rez.push(pathLength);
      continue;
    }

    // Else, jump until you find the ancestor
    while (a !== b) {
      for (let exp = ancestor.length - 1; exp >= 0; exp--) {
        const ancestorA = ancestor[exp][a];
        const ancestorB = ancestor[exp][b];

        // Oops too high, out of tree already
        if (!ancestorA || !ancestorB) continue;

        // Found different ancestors, jump to this level
        if (ancestorA !== ancestorB) {
          a = ancestorA;
          b = ancestorB;
          pathLength += 2 * 2 ** exp;
        }

        // If ancestors match, 2 cases
        // Case 1 (exp = 0) -> LCA found
        // Case 2 (exp != 0) -> Too high, drop exp by 1
        else {
          if (exp !== 0) continue;
          a = ancestorA;
          b = ancestorB;
          pathLength += 2 * 2 ** exp;
        }
      }
    }

    rez.push(pathLength);
  }

  return rez.map((a) => a === 0 ? 0 : modPow(2n, BigInt(a - 1), BigInt(10 ** 9 + 7)));
}
// @lc code=end

// const input = [
//   [
//     [1, 2],
//     [1, 3],
//     [3, 4],
//     [3, 5],
//   ],
//   [
//     [1, 4],
//     [3, 4],
//     [2, 5],
//   ],
// ];

const input = [
  [[1, 2]],
  [
    [1, 1],
    [1, 2],
  ],
];
const rez = assignEdgeWeights(input[0], input[1]);
console.log("rez:", rez);
