export function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + ((right - left) >>> 1);
    if (nums[mid]! < nums[mid + 1]!) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
