// f[i]表示第i天的最大收益
// f[i][0]表示持有一只股票
// f[i][1] 表示没有股票 而且处于冷冻期
// f[i][2] 表示没有股票，而且不处于冷冻期
// f[i][0] = Math.max(f[i-1][0],f[i-1][2]-prices[i]);
// f[i][1] = f[i-1][0]+prices[i];
// f[i][2] = Math.max(f[i-1][2],f[i-1][1]);
export function maxProfit(prices: number[]): number {
  const n = prices.length;
  const dp = Array.from(new Array(n)).map(() => new Array(3).fill(0));
  dp[0]![0] = -prices[0]!;
  dp[0]![1] = 0;
  dp[0]![2] = 0;
  for (let i = 1; i < n; i++) {
    dp[i]![0] = Math.max(dp[i - 1]![0], dp[i - 1]![2] - prices[i]!);
    dp[i]![1] = dp[i - 1]![0] + prices[i]!;
    dp[i]![2] = Math.max(dp[i - 1]![2], dp[i - 1]![1]);
  }

  return Math.max(dp[n - 1]![1], dp[n - 1]![2]);
}
