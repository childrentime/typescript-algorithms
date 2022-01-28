export function maxSubArray(nums: number[]): number {
  let answer = nums[0]!;
  let dp = nums[0]!;
  for (let i = 1; i < nums.length; i++) {
    dp = Math.max(dp + nums[i]!, nums[i]!);
    if (dp! > answer) {
      answer = dp;
    }
  }
  return answer;
}
