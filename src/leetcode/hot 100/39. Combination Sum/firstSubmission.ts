export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];
  const dfs = (target: number, combine: number[], idx: number) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      result.push(combine);
      return;
    }

    // 直接跳过
    dfs(target, combine, idx + 1);

    // 选择当前数
    if (target - candidates[idx]! >= 0) {
      dfs(target - candidates[idx]!, [...combine, candidates[idx]!], idx);
    }
  };

  dfs(target, [], 0);

  return result;
}
