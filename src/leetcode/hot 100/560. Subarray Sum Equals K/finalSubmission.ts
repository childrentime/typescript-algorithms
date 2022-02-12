export function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);
  let count = 0;
  let pre = 0;
  // 我们用哈希表记录数组遍历过程中的前缀和
  // 如果前缀和-k 在哈希表被记录过
  // 说明中间的几项可以构成一个答案 我们从哈希表中获取这个 前缀和-k
  for (const x of nums) {
    pre += x;
    if (map.has(pre - k)) {
      count += map.get(pre - k)!;
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre)! + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return count;
}
