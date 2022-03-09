export function missingNumber(nums: number[]): number {
  const n = nums.length;
  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  return (n * (n + 1)) / 2 - sum;
}
