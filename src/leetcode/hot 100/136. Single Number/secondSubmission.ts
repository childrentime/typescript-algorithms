export function singleNumber(nums: number[]): number {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]!)) {
      map.set(nums[i]!, map.get(nums[i]!)! + 1);
    } else {
      map.set(nums[i]!, 1);
    }
  }

  for (const item of map.keys()) {
    if (map.get(item) === 1) {
      return item;
    }
  }

  throw new Error('no single numbers');
}
