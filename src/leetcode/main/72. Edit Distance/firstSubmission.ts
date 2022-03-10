export function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  const dp = Array.from(new Array(m + 1)).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    dp[i]![0] = i;
  }
  for (let i = 1; i <= n; i++) {
    dp[0]![i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i]![j] = dp[i - 1]![j - 1];
      } else {
        dp[i]![j] = Math.min(
          dp[i - 1]![j] + 1,
          Math.min(dp[i]![j - 1] + 1, dp[i - 1]![j - 1] + 1)
        );
      }
    }
  }
  return dp[m]![n];
}
