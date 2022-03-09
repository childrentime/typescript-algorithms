export function isPowerOfThree(n: number): boolean {
  let base = 1;
  while (base <= n) {
    base = base * 3;
  }
  return base === n;
}
