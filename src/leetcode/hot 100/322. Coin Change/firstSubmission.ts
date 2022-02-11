// F(s)表示组成s需要的最少硬币值
// F(s) = F(s-c)+1;
// F(0) = 0x55555555
export function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (const item of coins) {
    dp[item] = 1;
  }
  for (let i = 1; i <= amount; i++) {
    for (const item of coins) {
      if (i - item >= 0) {
        dp[i] = Math.min(dp[i], dp[i - item]! + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}
