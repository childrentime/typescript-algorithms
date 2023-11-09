export default function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0]!.length;

  let answer = 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ] as const;

  const dfs = (i: number, j: number) => {
    grid[i]![j] = '0';
    for (const [x, y] of directions) {
      if (
        i + x >= 0 &&
        i + x < m &&
        j + y >= 0 &&
        j + y < n &&
        grid[i + x]![j + y]! === '1'
      ) {
        dfs(i + x, j + y);
      }
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i]![j] === '1') {
        dfs(i, j);
        answer++;
      }
    }
  }

  return answer;
}
