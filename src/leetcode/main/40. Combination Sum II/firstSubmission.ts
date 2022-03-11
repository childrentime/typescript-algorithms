export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const dfs = (first: number, arr: number[], sum: number) => {
    if (sum === target) {
      answer.push([...arr]);
    }
    if (sum >= target) {
      return;
    }
    for (let i = first; i < n; i++) {
      let item = candidates[i]!;
      if (i > first && candidates[i - 1] === item) {
        continue;
      }
      arr.push(item);
      dfs(i + 1, arr, sum + item);
      arr.pop();
    }
  };
  candidates.sort((a, b) => a - b);
  const answer: number[][] = [];
  const n = candidates.length;
  dfs(0, [], 0);
  return answer;
}
