// 两个前缀和之间的差值为k
export function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);
  let pre = 0;
  let answer = 0;
  for (const item of nums) {
    pre += item;
    if (map.has(pre - k)) {
      answer += map.get(pre - k)!;
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre)! + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return answer;
}
