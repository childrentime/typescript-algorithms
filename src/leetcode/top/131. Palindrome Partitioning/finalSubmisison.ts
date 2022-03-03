export function partition(s: string): string[][] {
  const answer: string[][] = [];
  const output: string[] = [];
  const n = s.length;
  const dp: boolean[][] = Array.from(new Array(n)).map(() =>
    new Array(n).fill(true)
  );
  const dfs = (index: number) => {
    if (index === n) {
      answer.push(output.slice());
      return;
    }
    for (let i = index; i < n; i++) {
      if (dp[index]![i]) {
        output.push(s.slice(index, i + 1));
        dfs(i + 1);
        output.pop();
      }
    }
  };
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i]![j] = s[i] === s[j] && dp[i + 1]![j - 1]!;
    }
  }
  dfs(0);
  return answer;
}
