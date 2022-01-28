export function minPathSum(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0]!.length;
  const dp = Array.from(new Array(m)).map(() => new Array(n).fill(0));
  dp[0]![0] = grid[0]![0];
  for (let i = 1; i < m; i++) {
    dp[i]![0] = dp[i - 1]![0] + grid[i]![0];
  }
  for (let i = 1; i < n; i++) {
    dp[0]![i] = dp[0]![i - 1] + grid[0]![i];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i]![j] = Math.min(dp[i - 1]![j], dp[i]![j - 1]) + grid[i]![j]!;
    }
  }

  return dp[m - 1]![n - 1];
}
