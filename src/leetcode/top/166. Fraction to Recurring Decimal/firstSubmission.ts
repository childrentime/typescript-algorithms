export function fractionToDecimal(
  numerator: number,
  denominator: number
): string {
  if (numerator % denominator === 0) {
    return String(numerator / denominator);
  }
  const stack: (string | number)[] = [];
  if ((numerator ^ denominator) < 0) {
    stack.push('-');
  }

  numerator = Math.abs(numerator);
  denominator = Math.abs(denominator);
  const intergerPart = ~~(numerator / denominator);
  stack.push(intergerPart);
  stack.push('.');

  const fracStack: (number | string)[] = [];
  const map = new Map<number, number>();
  let remainder = numerator % denominator;
  let index = 0;
  while (remainder !== 0 && !map.has(remainder)) {
    map.set(remainder, index);
    remainder *= 10;
    fracStack.push(~~(remainder / denominator));
    remainder %= denominator;
    index++;
  }
  if (remainder !== 0) {
    let insertIndex = map.get(remainder)!;
    fracStack.splice(insertIndex, 0, '(');
    fracStack.push(')');
  }
  return stack.join('').concat(fracStack.join(''));
}
