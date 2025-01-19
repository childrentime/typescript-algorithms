/**
 * 
输入：nums = [1,2,3], k = 3
输出：2
 */

export function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);
  let result = 0;
  let sum = 0;
  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      result = result + map.get(sum - k)!;
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum)! + 1);
    } else {
      map.set(sum, 1);
    }
  }
  return result;
}
