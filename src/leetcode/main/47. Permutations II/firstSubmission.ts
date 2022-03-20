export function permuteUnique(nums: number[]): number[][] {
  let res: number[][] = [];
  let n: number = nums.length;
  let cache: boolean[] = Array(n).fill(false);
  nums.sort((a, b) => a - b);
  dfs([]);
  return res;

  function dfs(arr: number[]): void {
    if (arr.length === n) {
      res.push([...arr]);
      return;
    }
    for (let i = 0; i < n; i++) {
      if (cache[i] || (i > 0 && nums[i] === nums[i - 1] && !cache[i - 1]))
        continue;
      cache[i] = true;
      arr.push(nums[i]!);
      dfs(arr);
      cache[i] = false;
      arr.pop();
    }
  }
}
