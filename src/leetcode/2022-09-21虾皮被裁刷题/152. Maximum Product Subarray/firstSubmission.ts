export default function maxProduct(nums: number[]): number {
  const max: number[] = [nums[0]!];
  const min: number[] = [nums[0]!];

  for (let i = 1; i < nums.length; i++) {
    max[i] = Math.max(nums[i]! * max[i - 1]!, nums[i]! * min[i - 1]!, nums[i]!);
    min[i] = Math.min(nums[i]! * max[i - 1]!, nums[i]! * min[i - 1]!, nums[i]!);
  }

  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < max.length; i++) {
    if (result < max[i]!) {
      result = max[i]!;
    }
  }

  return result;
}
