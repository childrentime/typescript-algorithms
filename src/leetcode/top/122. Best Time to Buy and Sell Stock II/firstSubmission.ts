// dp[i]表示第i天的最大收益
// dp[i][0] 表示第i天没有股票
// dp[i][1] 表示第i天持有一个股票
// dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+nums[i-1]);
// dp[i][1] = Math.max(dp[i-1][0]-i-1,dp[i-1][1])
export function maxProfit(prices: number[]): number {
  const n = prices.length;
  const dp = Array.from(new Array(n)).map(() => new Array(2).fill(0));
  dp[0]![0] = 0;
  dp[0]![1] = -prices[0]!;
  for (let i = 1; i < n; i++) {
    dp[i]![0] = Math.max(dp[i - 1]![0], dp[i - 1]![1] + prices[i - 1]);
    dp[i]![1] = Math.max(dp[i - 1]![0] - prices[i - 1]!, dp[i - 1]![1]);
  }
  return Math.max(dp[n - 1]![0], dp[n - 1]![1] + prices[n - 1]);
}
