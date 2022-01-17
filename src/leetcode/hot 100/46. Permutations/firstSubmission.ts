export function permute(nums: number[]): number[][] {
  const backtrack = (n: number, output: number[], first: number) => {
    if (first === n) {
      res.push(output.slice());
    }

    for (let i = first; i < n; i++) {
      [output[first], output[i]] = [output[i]!, output[first]!];

      backtrack(n, output, first + 1);

      [output[first], output[i]] = [output[i]!, output[first]!];
    }
  };

  const res: number[][] = [];

  backtrack(nums.length, nums, 0);

  return res;
}
