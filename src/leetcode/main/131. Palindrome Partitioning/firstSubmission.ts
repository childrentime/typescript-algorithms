export function partition(s: string): string[][] {
  const n = s.length;
  const dp: boolean[][] = Array.from(new Array(n)).map(() =>
    new Array(n).fill(true)
  );
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i]![j] = dp[i + 1]![j - 1]! && s[i] === s[j];
    }
  }
  const answer: string[][] = [];
  const output: string[] = [];
  const dfs = (first: number) => {
    if (first === n) {
      answer.push(output.slice());
    }

    for (let i = first; i < n; i++) {
      if (dp[first]![i]) {
        output.push(s.substring(first, i + 1));
        dfs(i + 1);
        output.pop();
      }
    }
  };
  dfs(0);
  return answer;
}
