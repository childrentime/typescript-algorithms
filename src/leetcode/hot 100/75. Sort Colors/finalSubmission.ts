/**
 Do not return anything, modify nums in-place instead.
 */
// [2,1,2,0,0,1]
export function sortColors(nums: number[]): void {
  let point = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[point]] = [nums[point]!, nums[i]!];
      point++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[point]] = [nums[point]!, nums[i]!];
      point++;
    }
  }
}
