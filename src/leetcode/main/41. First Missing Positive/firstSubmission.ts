export function firstMissingPositive(nums: any[]): number {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const num = +nums[i];
    if (num > 0) {
      nums[num] += '';
    }
  }
  for (let i = 1; i <= nums.length; i++) {
    if (typeof nums[i] !== 'string') {
      return i;
    }
  }
  return len;
}
