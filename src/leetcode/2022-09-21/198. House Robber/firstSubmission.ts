export default function rob(nums: number[]): number {
  const n = nums.length;
  const dp: number[] = [];

  if (nums.length === 1) {
    return nums[0]!;
  }

  dp[0] = nums[0]!;
  dp[1] = Math.max(nums[0]!, nums[1]!);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2]! + nums[i]!, dp[i - 1]!);
  }

  return dp[n - 1]!;
}
