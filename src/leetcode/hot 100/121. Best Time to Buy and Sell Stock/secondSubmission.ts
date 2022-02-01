export function maxProfit(prices: number[]): number {
  const n = prices.length;
  let answer = 0;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    if (prices[i]! < min) {
      min = prices[i]!;
    } else {
      answer = Math.max(answer, prices[i]! - min);
    }
  }
  return answer;
}
