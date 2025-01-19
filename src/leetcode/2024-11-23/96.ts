const cache = new Map<number, number>();
export function numTrees(n: number): number {
  if (n <= 1) {
    return 1;
  }
  if (cache.has(n)) {
    return cache.get(n)!;
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    cache.set(i, numTrees(i));
    cache.set(n - i - 1, numTrees(n - i - 1));
    res += cache.get(i)! * cache.get(n - i - 1)!;
  }
  return res;
}
