export function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);

  let sum = 0;
  let result = 0;
  for (const num of nums) {
    sum = sum + num;
    if (map.has(sum - k)) {
      result = result + map.get(sum - k)!;
    }
    map.set(sum, (map.get(sum) ?? 0) + 1);
  }
  return result;
}
