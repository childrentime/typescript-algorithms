export function canJump(nums: number[]): boolean {
  let rightMost = 0;
  for (let i = 0; i <= rightMost; i++) {
    if (rightMost >= nums.length - 1) {
      return true;
    }
    rightMost = Math.max(rightMost, i + nums[i]!);
  }
  return false;
}
