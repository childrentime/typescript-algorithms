/**
 Do not return anything, modify nums in-place instead.
 */

// 2 0 3 0 4 5
// 2 3 0 4 5 0 0
export function moveZeroes(nums: number[]): void {
  let first = 0;
  while (first < nums.length - 1) {
    if (nums[first] === 0) {
      let end = first + 1;
      while (nums[end] === 0 && end < nums.length - 1) {
        end++;
      }
      [nums[first], nums[end]] = [nums[end]!, nums[first]!];
      first++;
    } else {
      first++;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12]);
