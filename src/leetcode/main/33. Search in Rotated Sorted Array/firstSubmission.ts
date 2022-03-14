function search(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (nums[mid] === target) {
      return mid;
      // 处于左段
    } else if (nums[mid]! >= nums[left]!) {
      if (nums[mid]! > target && target >= nums[left]!) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      // 处于右段
    } else {
      if (nums[mid]! < target && target <= nums[right]!) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
