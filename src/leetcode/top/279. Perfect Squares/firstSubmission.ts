export function numSquares(n: number): number {
  const dp: number[] = new Array(n + 1).fill(4);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i]!, 1 + dp[i - j * j]!);
    }
  }
  return dp[n]!;
}
