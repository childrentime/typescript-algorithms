/**
 Do not return anything, modify nums in-place instead.
 */

export function nextPermutation(nums: number[]): void {
  let size = nums.length;
  let i = size - 1;
  for (; i > 0; i--) {
    if (nums[i]! > nums[i - 1]!) {
      for (let j = size - 1; j >= i; j--) {
        if (nums[j]! > nums[i - 1]!) {
          let tem = nums[j]!;
          nums[j] = nums[i - 1]!;
          nums[i - 1] = tem;
          break;
        }
      }
      break;
    }
  }
  let right = size - 1;
  while (i < right) {
    let tem = nums[i]!;
    nums[i] = nums[right]!;
    nums[right] = tem;
    i++;
    right--;
  }
}
