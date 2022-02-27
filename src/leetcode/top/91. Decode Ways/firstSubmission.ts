export function numDecodings(s: string): number {
  const n = s.length;
  s = ' ' + s;
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    const a = parseInt(s[i]!);
    const b = parseInt(s[i - 1]!) * 10 + a;
    if (a >= 1 && a <= 9) {
      dp[i] += dp[i - 1]!;
    }
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2]!;
    }
  }
  return dp[n]!;
}
