export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const v = nums[i]!;
    if (map.has(target - v)) {
      return [map.get(target - v)!, i];
    } else {
      map.set(v, i);
    }
  }

  throw new Error('');
}
