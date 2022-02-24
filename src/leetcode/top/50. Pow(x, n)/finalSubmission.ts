export function myPow(x: number, n: number): number {
  const quick = (x: number, n: number) => {
    let answer = 1.0;
    while (n > 0) {
      if (n & 1) {
        answer *= x;
      }
      x = x * x;
      n >>>= 1;
    }
    return answer;
  };

  if (n < 0) {
    return 1 / quick(x, -n);
  }
  return quick(x, n);
}
