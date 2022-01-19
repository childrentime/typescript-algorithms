export function singleNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]!) === nums.lastIndexOf(nums[i]!)) {
      return nums[i]!;
    }
  }

  throw new Error('no such element');
}
