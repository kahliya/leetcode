/*
 * @lc app=leetcode id=2265 lang=typescript
 *
 * [2265] Count Nodes Equal to Average of Subtree
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
function averageOfSubtree(root: TreeNode | null): number {
  let result = 0;

  function runDFS(n: TreeNode | null): number[] {
    if (n === null) return [0, 0];

    const left = runDFS(n.left);
    const right = runDFS(n.right);
    const totalVal = left[0] + right[0] + n.val;
    const numNodes = left[1] + right[1] + 1;

    if (Math.floor(totalVal / numNodes) === n.val) result++;
    return [totalVal, numNodes];
  }

  runDFS(root!);
  return result;
}

// @lc code=end
const rez = [];

const a5 = new TreeNode(0);
const a4 = new TreeNode(1);
const a3 = new TreeNode(8, a5, a4);
const a2 = new TreeNode(6);
const a1 = new TreeNode(5, null, a2);
const a0 = new TreeNode(4, a3, a1);
rez.push(averageOfSubtree(a0));

const b0 = new TreeNode(1);
rez.push(averageOfSubtree(b0));

console.log(rez);
