const cache = new Map<number, number>();
cache.set(1, 1)
cache.set(2, 2)
export function numSquares(n: number): number {
  if (cache.has(n)) {
    return cache.get(n)!;
  }
  for (let i = 2; i < n; i++) {
    if (i * i === n) {
      return 1;
    } else if (i * i > n) {
      break;
    }
  }
  let result = Infinity;
  for (let i = 1; i * i < n; i++) {
    result = Math.min(result, 1 + numSquares(n - (i * i)));
  }
  cache.set(n, result)
  return result;
};

console.log(numSquares(12))