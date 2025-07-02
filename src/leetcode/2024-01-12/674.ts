export function findLengthOfLCIS(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  const n = nums.length;
  const dp: number[] = Array(n).fill(0);
  let max = nums[0]!;
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i]! > max) {
      dp[i] = dp[i - 1]! + 1;
      max = nums[i]!;
    } else {
      dp[i] = 1;
      max = nums[i]!;
    }
  }

  let result = 1;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, dp[i]!);
  }
  return result;
}
