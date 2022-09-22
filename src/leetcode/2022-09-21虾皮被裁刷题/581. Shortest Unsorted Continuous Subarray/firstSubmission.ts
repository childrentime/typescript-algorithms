export default function findUnsortedSubarray(nums: number[]): number {
  const n = nums.length;

  let left = 1;
  let right = 0;

  let max = nums[0]!;
  let min = nums[n - 1]!;

  for (let i = 1; i < n; i++) {
    if (nums[i]! >= max) {
      max = nums[i]!;
    } else {
      right = i;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i]! <= min) {
      min = nums[i]!;
    } else {
      left = i;
    }
  }

  return right - left + 1;
}
