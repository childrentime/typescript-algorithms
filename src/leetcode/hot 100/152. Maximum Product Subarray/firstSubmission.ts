// 根据正负形讨论 dp

export function maxProduct(nums: number[]): number {
  const maxF = [nums[0]];
  const minF = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    maxF[i] = Math.max(
      nums[i]! * maxF[i - 1]!,
      Math.max(nums[i]!, minF[i - 1]! * nums[i]!)
    );
    minF[i] = Math.min(
      maxF[i - 1]! * nums[i]!,
      Math.min(nums[i]!, minF[i - 1]! * nums[i]!)
    );
  }
  let answer = maxF[0]!;
  for (let i = 1; i < nums.length; i++) {
    if (maxF[i]! > answer) {
      answer = maxF[i]!;
    }
  }

  return answer;
}
