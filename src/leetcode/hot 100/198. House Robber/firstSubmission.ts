// dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])
export function rob(nums: number[]): number {
  const n = nums.length;
  const dp: number[] = [];
  dp[0] = nums[0]!;
  dp[1] = nums[1]! > nums[0]! ? nums[1]! : nums[0]!;
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1]!, dp[i - 2]! + nums[i]!);
  }

  return dp[n - 1]!;
}
