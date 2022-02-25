function maxSubArray(nums: number[]): number {
  let prev = nums[0]!;
  let max = prev;
  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(prev + nums[i]!, nums[i]!);
    if (max < prev) {
      max = prev;
    }
  }
  return max;
}
