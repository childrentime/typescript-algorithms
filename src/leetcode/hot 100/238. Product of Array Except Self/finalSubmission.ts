export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const left = [];
  let r = 1;
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1]! * nums[i - 1]!;
  }

  for (let i = n - 1; i >= 0; i--) {
    left[i] = left[i]! * r;
    r = r * nums[i]!;
  }

  return left;
}
