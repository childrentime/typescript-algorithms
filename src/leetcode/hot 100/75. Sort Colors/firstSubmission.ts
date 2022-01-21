/**
 Do not return anything, modify nums in-place instead.
 */
// [2,1,2,0,0,1]
export function sortColors(nums: number[]): void {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 2) {
      continue;
    }
    let temp: number = i;
    while (nums[temp]! < nums[temp - 1]! && temp > 0) {
      [nums[temp], nums[temp - 1]] = [nums[temp - 1]!, nums[temp]!];
      temp--;
    }
  }
}
