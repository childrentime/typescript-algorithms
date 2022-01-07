export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i] as number;
    if (map.has(item)) {
      let index = map.get(item) as number;
      return [index, i];
    }
    map.set(target - item, i);
  }

  throw new Error("this is no answer")
}
