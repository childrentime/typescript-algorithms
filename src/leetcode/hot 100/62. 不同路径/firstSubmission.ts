export function uniquePaths(m: number, n: number): number {
  // 初始化二维数组的时候 不能用 fill
  const dp: number[][] = Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = [];
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i]![j] = 1;
      } else if (i === 0) {
        dp[i]![j] = dp[i]![j - 1]!;
      } else if (j === 0) {
        dp[i]![j] = dp[i - 1]![j]!;
      } else {
        dp[i]![j] = dp[i - 1]![j]! + dp[i]![j - 1]!;
      }
    }
  }
  return dp[m - 1]![n - 1]!;
}
