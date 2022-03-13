export function maxProfit(prices: number[]): number {
  let answer = 0;
  let min = prices[0]!;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i]! < min) {
      min = prices[i]!;
    } else {
      answer = Math.max(answer, prices[i]! - min);
    }
  }
  return answer;
}
