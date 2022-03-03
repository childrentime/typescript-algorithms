export function longestPalindrome(s: string): string {
  let max = 1;
  let maxStr = s[0]!;
  const n = s.length;
  const dp: boolean[][] = Array.from(new Array(n)).map(() =>
    new Array(n).fill(true)
  );
  // dp[i][j] 表示s[i][j]是否为回文串
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i]![j] = s[i] === s[j] && dp[i + 1]![j - 1]!;
      if (dp[i]![j]) {
        if (max < j - i + 1) {
          max = j - i + 1;
          maxStr = s.substring(i, j + 1);
        }
      }
    }
  }
  return maxStr;
}
