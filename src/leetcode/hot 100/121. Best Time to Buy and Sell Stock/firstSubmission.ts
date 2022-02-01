// time out
export function maxProfit(prices: number[]): number {
  const n = prices.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[j]! - prices[i]! > max) {
        max = prices[j]! - prices[i]!;
      }
    }
  }

  return max;
}
