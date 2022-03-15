export function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i]! > 0 && nums[i]! <= n && nums[nums[i]! - 1] !== nums[i]!) {
      [nums[nums[i]! - 1], nums[i]] = [nums[i]!, nums[nums[i]! - 1]!];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}
