export function rob(nums: number[]): number {
  const n = nums.length;
  if (n < 2) {
    return nums[0]!;
  }
  const dp = new Array(n).fill(0);
  dp[0] = nums[0]!;
  dp[1] = Math.max(nums[1]!, nums[0]!);
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 2]! + nums[i], dp[i - 1]!);
  }
  return dp[n - 1];
}
