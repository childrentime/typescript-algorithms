export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const answer: number[][] = [];
  const dfs = (index: number, target: number, output: number[]) => {
    if (index === candidates.length) {
      return;
    }
    if (target === 0) {
      answer.push(output);
      return;
    }
    dfs(index + 1, target, output);
    if (target - candidates[index]! >= 0) {
      dfs(index, target - candidates[index]!, [...output, candidates[index]!]);
    }
  };

  dfs(0, target, []);

  return answer;
}
