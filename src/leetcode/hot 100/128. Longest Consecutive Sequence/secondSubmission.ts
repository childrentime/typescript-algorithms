// 注意 用map实现的并差集中有负数 所以不能使用带权数组
export function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  nums = [...new Set(nums)];

  const n = nums.length;

  const map = new Map<number, number>();

  const root = (i: number): number => {
    while (map.get(i) !== i) {
      // 路径压缩
      map.set(i, map.get(map.get(i)!)!);
      i = map.get(i)!;
    }
    return i;
  };

  const connected = (i: number, j: number): boolean => {
    return root(i) === root(j);
  };

  const union = (i: number, j: number): void => {
    const p = root(i);
    const q = root(j);
    if (p === q) {
      return;
    }
    map.set(p, q);
  };

  for (let i = 0; i < n; i++) {
    map.set(nums[i]!, nums[i]!);
  }

  for (let i = 0; i < n; i++) {
    if (map.has(nums[i]! - 1)) {
      if (!connected(nums[i]! - 1, nums[i]!)) {
        union(nums[i]! - 1!, nums[i]!);
      }
    }
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    const right = root(nums[i]!)!;
    answer = Math.max(answer, right - nums[i]! + 1);
  }

  return answer;
}
