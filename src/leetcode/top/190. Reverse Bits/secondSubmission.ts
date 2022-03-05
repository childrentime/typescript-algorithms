export function reverseBits(n: number): number {
  const str = n.toString(2).padStart(32, '0');
  const reverseStr = str.split('').reverse().join('');
  return parseInt(reverseStr, 2);
}
