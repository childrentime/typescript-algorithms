export function permute(nums: number[]): number[][] {
  if (nums.length === 0) {
    return [];
  }
  let result: number[][] = [[]];
  for (let i = 0; i < nums.length; i++) {
    const newResult: number[][] = [];
    const current = nums[i]!;
    for (const perm of result) {
      for (let j = 0; j <= perm.length; j++) {
        const newPerm = [...perm];
        newPerm.splice(j, 0, current);
        newResult.push(newPerm);
      }
    }

    result = newResult;
  }

  return result;
}

console.log(permute([1, 2, 3]));
