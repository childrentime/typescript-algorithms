/**
 Do not return anything, modify board in-place instead.
 */
// 从边界标记
export function solve(board: string[][]): void {
  const m = board.length;
  const n = board[0]!.length;

  const dfs = (x: number, y: number) => {
    console.log(x, y);
    if (x < 0 || x >= m || y < 0 || y >= n || board[x]![y] !== 'O') {
      return;
    }
    board[x]![y] = 'a';
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  };

  for (let i = 0; i < m; i++) {
    dfs(i, 0);
    dfs(i, n - 1);
  }

  for (let i = 1; i < n - 1; i++) {
    dfs(0, i);
    dfs(m - 1, i);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i]![j] === 'a') {
        board[i]![j] = 'O';
      } else if (board[i]![j] === 'O') {
        board[i]![j] = 'X';
      }
    }
  }
}
