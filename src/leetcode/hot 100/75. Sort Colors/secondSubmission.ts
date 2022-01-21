/**
 Do not return anything, modify nums in-place instead.
 */
// [2,1,2,0,0,1] [1,2,0]
export function sortColors(nums: number[]): void {
  let left = 0;
  let right = nums.length - 1;
  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left]!, nums[i]!];
      left++;
    } else if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right]!, nums[i]!];
      right--;
      i--;
    }
  }
}
