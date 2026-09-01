/*
 * @lc app=leetcode id=3310 lang=typescript
 *
 * [3310] Remove Methods From Project
 */

// @lc code=start
function remainingMethods(
  n: number,
  k: number,
  invocations: number[][],
): number[] {
  const calls: number[][] = Array.from({ length: n }, () => []);

  // Get calls/calledBy relationships
  for (const inv of invocations) {
    calls[inv[0]].push(inv[1]);
  }

  // Find suspicious (DFS from k)
  const explored = Array(n).fill(false);
  const dfsStack: number[] = [k];

  while (dfsStack.length !== 0) {
    const node = dfsStack.pop()!;
    explored[node] = true;

    for (const n of calls[node]) {
      if (!explored[n]) dfsStack.push(n);
    }
  }

  function buildFinal(n: number, sus: number[]) {
    const arr: number[] = [];
    for (let i = 0; i < n; i++) {
      if (sus[i]) continue;
      arr.push(i);
    }
    return arr;
  }

  // Check again if any non-sus methods invoke the sus methods
  for (const inv of invocations) {
    if (!explored[inv[0]] && explored[inv[1]]) return buildFinal(n, []);
  }

  return buildFinal(n, explored);
}
// @lc code=end
const rez = [];

rez.push(
  remainingMethods(4, 1, [
    [1, 2],
    [0, 1],
    [3, 2],
  ]),
);

rez.push(
  remainingMethods(5, 0, [
    [1, 2],
    [0, 2],
    [0, 1],
    [3, 4],
  ]),
);

rez.push(
  remainingMethods(3, 2, [
    [1, 2],
    [0, 1],
    [2, 0],
  ]),
);

rez.push(remainingMethods(2, 0, []));

console.log(rez);
