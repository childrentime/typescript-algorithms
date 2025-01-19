export function numIslands(grid: string[][]): number {
  let result: number = 0;
  const m = grid.length;
  const n = grid[0]!.length;

  const tags: boolean[][] = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false));

  const dfs = (i: number, j: number) => {
    tags[i]![j] = true;
    if (i - 1 >= 0 && grid[i - 1]![j]! === '1' && !tags[i - 1]![j]) {
      dfs(i - 1, j);
    }
    if (i + 1 < m && grid[i + 1]![j]! === '1' && !tags[i + 1]![j]) {
      dfs(i + 1, j);
    }
    if (j - 1 >= 0 && grid[i]![j - 1]! === '1' && !tags[i]![j - 1]) {
      dfs(i, j - 1);
    }
    if (j + 1 < n && grid[i]![j + 1]! === '1' && !tags[i]![j + 1]) {
      dfs(i, j + 1);
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!tags[i]![j] && grid[i]![j] === '1') {
        dfs(i, j);
        result++;
      } else {
        continue;
      }
    }
  }

  return result;
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
);
