export default function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >>> 1);
    if (nums[mid]! > target) {
      right = mid - 1;
    } else if (nums[mid]! < target) {
      left = mid + 1;
    } else {
      left = mid;
      right = mid;
      while (nums[left]! === nums[left - 1]!) {
        left--;
      }
      while (nums[right]! === nums[right + 1]) {
        right++;
      }
      return [left, right];
    }
  }

  return [-1, -1];
}
