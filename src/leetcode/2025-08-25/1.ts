export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    if (!map.has(target - num)) {
      map.set(num, i)
    } else {
      return [map.get(target - num)!, i]
    }
  }
  return [-1, -1]
};

console.log(twoSum([2, 7, 11, 15], 9))