export function climbStairs(n: number): number {
  let p = 0;
  let q = 1;
  let answer = 0;
  while (n) {
    answer = p + q;
    p = q;
    q = answer;
    n--;
  }
  return answer;
}
