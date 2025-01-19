export function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i]! <= 0) {
      nums[i] = n + 1;
    }
  }
  for (let i = 0; i < n; i++) {
    const v = Math.abs(nums[i]!);
    nums[v - 1] = -Math.abs(nums[v - 1]!);
  }
  for (let i = 0; i < n; i++) {
    if (nums[i]! > 0) {
      return i + 1;
    }
  }

  return n + 1;
}
