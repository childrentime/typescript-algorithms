function hammingWeight(n: number): number {
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
