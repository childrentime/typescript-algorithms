function searchRange(nums: number[], target: number): number[] {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const middle = left + ((right - left) >>> 1);
    if (nums[middle]! > target) {
      right = middle - 1;
    } else if (nums[middle]! < target) {
      left = middle + 1;
    } else {
      left = middle;
      right = middle;
      while (nums[left] === nums[left - 1]) {
        left--;
      }
      while (nums[right] === nums[right + 1]) {
        right++;
      }
      return [left, right];
    }
  }

  return [-1, -1];
}
