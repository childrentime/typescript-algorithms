export function minDistance(word1: string, word2: string): number {
  const m = word1.length;
  const n = word2.length;
  if (n * m === 0) {
    return n + m;
  }
  const dp = Array.from(new Array(m + 1)).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i < m + 1; i++) {
    dp[i]![0] = i;
  }
  for (let i = 0; i < n + 1; i++) {
    dp[0]![i] = i;
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      let left_down = dp[i - 1]![j - 1];
      if (word1[i - 1] === word2[j - 1]) {
        left_down += 1;
      }
      dp[i]![j] = Math.min(
        dp[i]![j - 1] + 1,
        Math.min(dp[i - 1]![j] + 1, left_down)
      );
    }
  }

  return dp[m]![n];
}
