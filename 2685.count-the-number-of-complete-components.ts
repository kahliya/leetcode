/*
 * @lc app=leetcode id=2685 lang=typescript
 *
 * [2685] Count the Number of Complete Components
 */

// @lc code=start
function countCompleteComponents(n: number, edges: number[][]): number {
  // Step 1. Get connection map
  const connections: Map<number, number[]> = new Map();
  for (const edge of edges) {
    const n1 = edge[0];
    const n2 = edge[1];
    const connN1 = connections.get(n1) ?? [];
    const connN2 = connections.get(n2) ?? [];
    connN1.push(n2);
    connN2.push(n1);
    connections.set(n1, connN1);
    connections.set(n2, connN2);
  }

  // 2 tasks we are acheiving in this DFS
  // Step 2. DFS to get all connected components
  const explored = Array(n).fill(false);
  
  function searchDFS(node: number): number[] {
    if (explored[node]) return [0, 0];
    explored[node] = true;

    const thisConns = connections.get(node) ?? []
    let nodeCount = 1;
    let edgeCount = thisConns.length;
    for (const other of thisConns) {
      const [n, e] = searchDFS(other);
      nodeCount += n;
      edgeCount += e;
    }

    return [nodeCount, edgeCount];
  }

  // Step 3. Math to check if components are complete
  //      >> For a completed component,
  //      >> if there are n nodes
  //      >> there must be a total of n(n-1) edges
  let completeComponents = 0;
  for (let i = 0; i < n; i++) {
    if (explored[i]) continue;

    const [n, e] = searchDFS(i);
    if (e === n * (n - 1)) completeComponents++;
  }

  return completeComponents;
}
// @lc code=end
const rez = countCompleteComponents(6, [
  [0, 1],
  [0, 2],
  [1, 2],
  [3, 4],
  [3, 5],
]); // 1

// const rez = countCompleteComponents(6, [
//   [0, 1],
//   [0, 2],
//   [1, 2],
//   [3, 4],
// ]); // 3

console.log(rez);
