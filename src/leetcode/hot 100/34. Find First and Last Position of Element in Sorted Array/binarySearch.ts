export function searchRange(nums: number[], target: number): number[] {
  const binarySearch = (nums: number[], target: number, lower: boolean) => {
    let left = 0;
    let right = nums.length - 1;
    let result = nums.length;
    while (left <= right) {
      const mid = ~~((left + right) / 2);
      if (nums[mid]! > target || (lower && nums[mid]! >= target)) {
        right = mid - 1;
        result = mid;
      } else {
        left = mid + 1;
      }
    }

    return result;
  };

  const result = [-1, -1];
  const left = binarySearch(nums, target, true);
  const right = binarySearch(nums, target, false) - 1;
  if (left <= right && right <= nums.length - 1) {
    return [left, right];
  } else {
    return result;
  }
}
