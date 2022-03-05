export function reverseBits(n: number): number {
  const bits: number[] = [];
  for (let i = 0; i < 32; i++) {
    bits[i] = (n >>> i) & 1;
  }
  let answer = 0;
  for (let i = 31; i >= 0; i--) {
    answer += bits[i]! << (31 - i);
  }
  // make it unsign
  return answer >>> 0;
}
