export function findDisappearedNumbers(nums: number[]): number[] {
  for (const num of nums) {
    const v = Math.abs(num);
    nums[v - 1] = -Math.abs(nums[v - 1]!);
  }

  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]! > 0) {
      result.push(i + 1);
    }
  }

  return result;
}
