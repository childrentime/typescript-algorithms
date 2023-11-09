export default function singleNumber(nums: number[]): number {
  return nums.reduce((pre, cur) => pre ^ cur);
}
