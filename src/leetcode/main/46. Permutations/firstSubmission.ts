export function permute(nums: number[]): number[][] {
  const answer: number[][] = [];
  const n = nums.length;
  const dfs = (output: number[], first: number) => {
    if (first === n) {
      answer.push(output.slice());
    }

    for (let i = first; i < n; i++) {
      [output[first], output[i]] = [output[i]!, output[first]!];
      dfs(output, first + 1);
      [output[first], output[i]] = [output[i]!, output[first]!];
    }
  };

  dfs(nums, 0);
  return answer;
}
