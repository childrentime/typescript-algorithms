export function removeDuplicates(nums: number[]): number {
  let len = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    } else {
      nums[len] = nums[i]!;
      len++;
    }
  }
  return len;
}
