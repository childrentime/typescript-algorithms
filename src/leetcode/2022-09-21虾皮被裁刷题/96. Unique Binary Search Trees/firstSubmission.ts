/*
  G(n) = F(1)+F(2)+...+F(n)
  F(i) = G(i-1)*G(n-i)
  G(n) = G(0)*G(n-1)+G(1)*G(n-2)+..+G(n-1)*G(0)
  G(0) = 1
  G(1) = 1
 */
export default function numTrees(n: number): number {
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j]! * dp[i - j - 1]!;
    }
  }

  return dp[n]!;
}
