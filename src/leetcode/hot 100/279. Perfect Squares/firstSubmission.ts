export function numSquares(n: number): number {
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let minn = Infinity;
    for (let j = 1; j * j <= i; j++) {
      minn = Math.min(minn, dp[i - j * j]);
    }
    dp[i] = minn;
  }

  return dp[n]!;
}
