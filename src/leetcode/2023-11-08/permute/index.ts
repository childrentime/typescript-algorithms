export function permute(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [[]];
  }

  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    const arr = nums.filter((_, index) => index !== i);
    const permuteArr = permute(arr);
    for (const a of permuteArr) {
      result.push([...a, nums[i]!]);
    }
  }

  return result;
}
