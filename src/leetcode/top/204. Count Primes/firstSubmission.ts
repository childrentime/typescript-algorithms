export function countPrimes(n: number): number {
  const isPrime = (x: number) => {
    for (let i = 2; i * i <= x; ++i) {
      if (x % i == 0) {
        return 0;
      }
    }
    return 1;
  };

  let ans = 0;
  for (let i = 2; i < n; ++i) {
    ans += isPrime(i);
  }
  return ans;
}
