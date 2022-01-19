export function singleNumber(nums: number[]): number {
  return nums.reduce((pre, cur) => (pre ^= cur), 0);
}
