export function canJump(nums: number[]): boolean {
  let rightMost = 1;
  let i = 0;
  while (i < rightMost) {
    rightMost = Math.max(nums[i]! + i + 1, rightMost);
    if (rightMost >= nums.length) {
      return true;
    }
    i++;
  }
  return false;
}
