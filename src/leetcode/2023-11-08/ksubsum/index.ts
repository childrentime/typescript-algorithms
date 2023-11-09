export function subarraySum(nums: number[], k: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j >= 0; j--) {
      sum += nums[j]!;
      if (sum === k) {
        count++;
      }
    }
  }

  return count;
}

// 3 4 7 2 -1 1 4 2
// 要求和为k的子数组，也就是求 两个子数组的差为k 以及子数组本身加起来为k
export function subarraySum1(nums: number[], k: number): number {
  const map = new Map<number, number>();
  /** 有1个0，也就是子数组本身加起来为k的情况，这时候这个子数组加上0这个子数组减去0为7 */
  map.set(0, 1);

  // 前n个数的子数组和
  let pre = 0;
  let count = 0;
  for (const n of nums) {
    pre += n;
    // 如果两个子数组之间的差为k
    if (map.has(pre - k)) {
      count += map.get(pre - k)!;
    }

    // 如果子数组和有重复的，记录重复次数
    if (map.has(pre)) {
      map.set(pre, map.get(pre)! + 1);
    } else {
      map.set(pre, 1);
    }
  }

  return count;
}
