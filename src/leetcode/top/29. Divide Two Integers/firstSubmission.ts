export function divide(dividend: number, divisor: number): number {
  const MAX = 2 ** 31 - 1;
  const MIN = (-2) ** 31;
  if (dividend === MIN) {
    if (divisor === 1) {
      return MIN;
    }
    if (divisor === -1) {
      return MAX;
    }
  }
  if (divisor === MAX) {
    if (divisor === 1) {
      return MAX;
    }
    if (divisor === -1) {
      return MIN;
    }
  }
  const sign = dividend > 0 === divisor > 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  let result = 0;
  for (let x = 31; x >= 0; x--) {
    if (dividend >>> x >= divisor) {
      dividend = dividend - (divisor << x);
      result += 1 << x;
    }
  }
  return sign ? result : -result;
}
