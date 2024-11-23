export function permute(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [[]];
  }

  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    const arr = nums.filter((_, index) => index !== i);
    const permuteArr = permute(arr);
    for (const a of permuteArr) {
      result.push([...a, nums[i]!]);
    }
  }

  return result;
}

export function permuteUnique(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [[]];
  }

  const result: number[][] = [];
  const set = new Set<string>();
  for (let i = 0; i < nums.length; i++) {
    const arr = nums.filter((_, index) => index !== i);
    const permuteArr = permuteUnique(arr);
    for (const a of permuteArr) {
      const res = [...a, nums[i]!];
      const resString = res.join('');
      if (set.has(resString)) {
        continue;
      }
      set.add(resString);
      result.push(res);
    }
  }

  return result;
}