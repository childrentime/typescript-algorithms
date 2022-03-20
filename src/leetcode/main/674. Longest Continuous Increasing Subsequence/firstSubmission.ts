export function findLengthOfLCIS(nums: number[]): number {
  let max = 1;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! > nums[i - 1]!) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }
  max = Math.max(max, count);
  return max;
}
