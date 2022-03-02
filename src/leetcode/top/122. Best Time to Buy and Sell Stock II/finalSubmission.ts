export function maxProfit(prices: number[]): number {
  let answer = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i]! > prices[i - 1]!) {
      answer += prices[i]! - prices[i - 1]!;
    }
  }
  return answer;
}
