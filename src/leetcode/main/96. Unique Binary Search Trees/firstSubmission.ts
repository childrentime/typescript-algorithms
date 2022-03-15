export function numTrees(n: number): number {
  const dp: number[] = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let res = 0;
    for (let j = 0; j < i; j++) {
      res += dp[j]! * dp[i - j - 1]!;
    }
    dp[i] = res;
  }
  return dp[n]!;
}
