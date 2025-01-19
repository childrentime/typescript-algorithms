export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0]!.length;

  if (obstacleGrid[0]![0] !== 0) {
    return 0;
  }

  const dp: number[][] = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  dp[0]![0] = 1;

  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i]![0]! === 0) {
      dp[i]![0] = dp[i - 1]![0]!;
    } else {
      dp[i]![0] = 0;
    }
  }

  for (let j = 1; j < n; j++) {
    if (obstacleGrid[0]![j] === 0) {
      dp[0]![j] = dp[0]![j - 1]!;
    } else {
      dp[0]![j] = 0;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i]![j]! === 0) {
        dp[i]![j] = dp[i - 1]![j]! + dp[i]![j - 1]!;
      } else {
        dp[i]![j] = 0;
      }
    }
  }

  return dp[m - 1]![n - 1]!;
}

const result = uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]);

console.log('result', result);
