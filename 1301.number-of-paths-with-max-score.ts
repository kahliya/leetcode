/*
 * @lc app=leetcode id=1301 lang=typescript
 *
 * [1301] Number of Paths with Max Score
 */

// @lc code=start
function pathsWithMaxScore(board: string[]): number[] {
  // DFS, store known costs at each cell
  const sumGrid: number[][][] = Array.from({ length: board.length }, () =>
    Array.from({ length: board.length }, () => Array(2).fill(-99)),
  );

  board[board.length - 1] =
    board[board.length - 1].substring(0, board.length - 1) + "0";

  // In sumGrid,
  // >> -99 = not seen yet
  // >> -1 = unreachable, dead branch
  const INVALID = [-1, -1];
  function boardDFS(x: number, y: number): void {
    // Out of bounds
    if (x < 0 || y < 0) {
      return;
    }

    const memo = sumGrid[x][y];
    if (memo[0] !== -99 && memo[1] !== -99) {
      return;
    }

    // If obstacle
    if (board[x][y] === "X") {
      sumGrid[x][y] = INVALID;
      return;
    }

    // Reached end
    if (x === 0 && y === 0) {
      sumGrid[x][y] = [0, 1];
      return;
    }

    boardDFS(x - 1, y);
    boardDFS(x - 1, y - 1);
    boardDFS(x, y - 1);
    const up = x - 1 >= 0 ? sumGrid[x - 1][y] : INVALID;
    const upLeft = x - 1 >= 0 && y - 1 >= 0 ? sumGrid[x - 1][y - 1] : INVALID;
    const left = y - 1 >= 0 ? sumGrid[x][y - 1] : INVALID;

    // If all directions unreachable..
    if (up[0] === -1 && upLeft[0] === -1 && left[0] === -1) {
      sumGrid[x][y] = INVALID;
      return;
    }

    const maxSumForward = Math.max(up[0], upLeft[0], left[0]);
    let pathCountHere = 0;
    if (up[0] === maxSumForward) pathCountHere += up[1];
    if (upLeft[0] === maxSumForward) pathCountHere += upLeft[1];
    if (left[0] === maxSumForward) pathCountHere += left[1];

    const maxSumHere = maxSumForward + Number(board[x][y]);
    sumGrid[x][y] = [maxSumHere, pathCountHere % (Math.pow(10, 9) + 7)];
  }

  boardDFS(board.length - 1, board.length - 1);
  const result = sumGrid[board.length - 1][board.length - 1];

  if (result[0] === -1) return [0, 0];
  return result;
}

// @lc code=end
// const rez = pathsWithMaxScore(["E23", "2X2", "12S"]); // 7
const rez = pathsWithMaxScore(["E12", "1X1", "21S"]); // 4
// const rez = pathsWithMaxScore(["E11","XXX","11S"]); // 0
// const rez = pathsWithMaxScore(["E11", "XXX", "11S"]); // 0
console.log("rez:", rez);
