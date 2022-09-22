export default function maxProfit(prices: number[]): number {
  let result = 0;
  let min = prices[0]!;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i]! > min) {
      result = Math.max(result, prices[i]! - min);
    } else {
      min = prices[i]!;
    }
  }

  return result;
}
