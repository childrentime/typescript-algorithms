/**
 Do not return anything, modify nums in-place instead.
 */
// [1,2,0,0,3,12]
export function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let left = 0,
    right = 0;
  while (right < n) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right]!, nums[left]!];
      left++;
    }
    right++;
  }
}
