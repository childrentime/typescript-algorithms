export function isPowerOfTwo(n: number): boolean {
  let count = 0;
  while (n >= 1) {
    const value = n & 1;
    if (value === 1) {
      count++;
    }
    n = n >>> 1;
  }
  return count === 1;
}
