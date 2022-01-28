export function canJump(nums: number[]): boolean {
  let rightMost = 0;
  for (let i = 0; i <= rightMost; i++) {
    rightMost = Math.max(rightMost, nums[i]! + i);
    if (rightMost >= nums.length - 1) {
      return true;
    }
  }

  return false;
}
