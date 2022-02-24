export function permute(nums: number[]): number[][] {
  const n = nums.length;
  const answer: number[][] = [];
  const backTrace = (output: number[], first: number) => {
    if (first === n) {
      answer.push(output.slice());
    }

    for (let i = first; i < n; i++) {
      [output[first], output[i]] = [output[i]!, output[first]!];

      backTrace(output, first + 1);

      [output[i], output[first]] = [output[first]!, output[i]!];
    }
  };

  backTrace(nums, 0);
  return answer;
}
