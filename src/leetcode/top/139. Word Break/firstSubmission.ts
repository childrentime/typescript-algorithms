export function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const dp: boolean[] = new Array(n + 1).fill(false);
  dp[0] = true;
  const wordSet = new Set(wordDict);
  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[i] === true) {
        break;
      }
      if (dp[j] === false) {
        continue;
      }
      const suffix = s.substring(j, i);
      if (wordSet.has(suffix) && dp[j]) {
        dp[i] = true;
      }
    }
  }
  return dp[n]!;
}
