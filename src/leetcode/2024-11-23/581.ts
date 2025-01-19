/**
输入：nums = [2, 8, 3, 5, 4, 6, 9]
输出：5
 */
export function findUnsortedSubarray(nums: number[]): number {
  const n = nums.length;
  let left = 0;
  // 从前找第一个破坏的
  while (left < n - 1 && nums[left]! <= nums[left + 1]!) {
    left++;
  }
  if (left === n - 1) {
    return 0;
  }
  let right = n - 1;
  // 从后找第一个破坏的
  while (right > 0 && nums[right]! >= nums[right - 1]!) {
    right--;
  }
  let min = Math.min(...nums.slice(left, right + 1));
  let max = Math.max(...nums.slice(left, right + 1));
  while (left > 0 && nums[left - 1]! > min) {
    left--;
  }
  while (right < n && nums[right + 1]! < max) {
    right++;
  }
  return right - left - 1;
}

findUnsortedSubarray([2, 8, 3, 5, 4, 6, 9]);
