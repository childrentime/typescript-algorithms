export function maxSubArray(nums: number[]): number {
  let max = -Infinity;
  const dp: number[] = [];
  dp[0] = nums[0]!;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1]! + nums[i]!, nums[i]!);
  }
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, dp[i]!);
  }

  return max;
}
