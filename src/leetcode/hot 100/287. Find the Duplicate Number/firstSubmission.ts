// 会超出时间限制
export function findDuplicate(nums: number[]): number {
  for (const item of nums) {
    if (nums.indexOf(item) !== nums.lastIndexOf(item)) {
      return item;
    }
  }

  return -1;
}
