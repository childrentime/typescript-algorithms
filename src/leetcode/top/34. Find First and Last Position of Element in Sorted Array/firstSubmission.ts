function searchRange(nums: number[], target: number): number[] {
  // 找第一个比 target大的 和第一个大于等于 target的
  const binarySearch = (min: boolean): number => {
    let left = 0;
    let right = nums.length - 1;
    let result = nums.length;
    while (left <= right) {
      let mid = left + ((right - left) >>> 1);
      if (nums[mid]! > target || (min && nums[mid]! >= target)) {
        right = mid - 1;
        result = mid;
      } else {
        left = mid + 1;
      }
    }
    return result;
  };

  const left = binarySearch(true);
  const right = binarySearch(false) - 1;
  return left <= right ? [left, right] : [-1, -1];
}
