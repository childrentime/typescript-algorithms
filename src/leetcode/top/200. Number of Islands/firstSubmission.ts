export function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0]!.length;
  const dfs = (i: number, j: number) => {
    grid[i]![j] = '0';
    if (i + 1 < m && grid[i + 1]![j] === '1') {
      dfs(i + 1, j);
    }
    if (i - 1 >= 0 && grid[i - 1]![j] === '1') {
      dfs(i - 1, j);
    }
    if (j + 1 < n && grid[i]![j + 1] === '1') {
      dfs(i, j + 1);
    }
    if (j - 1 >= 0 && grid[i]![j - 1] === '1') {
      dfs(i, j - 1);
    }
  };

  let answer = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i]![j]! === '1') {
        answer++;
        dfs(i, j);
      }
    }
  }

  return answer;
}
