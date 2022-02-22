export function isMatch(s: string, p: string): boolean {
  const m = s.length;
  const n = p.length;
  const dp: boolean[][] = Array.from(new Array(m + 1)).map(() =>
    new Array(n + 1).fill(false)
  );
  dp[0]![0] = true;
  // 空字符串特殊情况处理
  for (let i = 1; i <= n; i++) {
    if (p[i - 1] === '*') {
      dp[0]![i] = true;
    } else {
      break;
    }
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        dp[i]![j] = dp[i]![j - 1]! || dp[i - 1]![j]!;
      } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
        dp[i]![j] = dp[i - 1]![j - 1]!;
      }
    }
  }

  return dp[m]![n]!;
}
