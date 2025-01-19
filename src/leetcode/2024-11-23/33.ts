/**
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
 */
export function search(nums: number[], target: number): number {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = (left + right) >>> 1;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid]! >= nums[left]!) {
      // left-mid 递增
      if (nums[mid]! > target && target >= nums[left]!) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // mid-right递增
      if (nums[mid]! < target && target <= nums[right]!) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
