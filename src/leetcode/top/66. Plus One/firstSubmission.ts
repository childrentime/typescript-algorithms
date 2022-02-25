export function plusOne(digits: number[]): number[] {
  let v = BigInt(digits.join(''));
  v = v + 1n;
  return v.toString().split('').map(Number);
}
