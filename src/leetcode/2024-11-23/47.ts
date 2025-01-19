export function permuteUnique<T>(nums: number[]): number[][] {
  if (!nums.length) {
    return [];
  }
  let result: number[][] = [[]];
  const freqMap = new Map<number, number>();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    const newResult: number[][] = [];
    for (const perm of result) {
      const fMap = new Map(freqMap);
      for (const num of perm) {
        if (fMap.has(num)) {
          fMap.set(num, fMap.get(num)! - 1);
          if (fMap.get(num) === 0) {
            fMap.delete(num);
          }
        }
      }
      for (const num of fMap.keys()) {
        if (fMap.get(num)! > 0) {
          newResult.push([...perm, num]);
        }
      }
    }
    result = newResult;
  }
  return result;
}

// 使用示例
console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 2]));
