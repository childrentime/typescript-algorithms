export function hammingDistance(x: number, y: number): number {
  let answer = 0;
  let z = x ^ y;
  while (z !== 0) {
    z = z & (z - 1);
    answer++;
  }
  return answer;
}
