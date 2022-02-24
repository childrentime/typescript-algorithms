export function myPow(x: number, n: number): number {
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  if (n === 1) {
    return x;
  }
  if (n === 2) {
    return x * x;
  }
  if (n % 2 === 0) {
    const half = myPow(x, n / 2);
    return half * half;
  } else {
    const v = n % 2;
    const v1 = myPow(x, n - v);
    const v2 = myPow(x, v);
    return v1 * v2;
  }
}
