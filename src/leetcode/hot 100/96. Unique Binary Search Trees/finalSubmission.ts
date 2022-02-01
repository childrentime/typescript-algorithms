export function numTrees(n: number): number {
  let answer = 1;
  for (let i = 0; i < n; i++) {
    answer = (2 * (2 * i + 1) * answer) / (i + 2);
  }
  return answer;
}
