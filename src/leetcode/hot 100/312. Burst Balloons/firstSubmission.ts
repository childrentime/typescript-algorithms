export function maxCoins(nums: number[]): number {
  const n = nums.length;
  const arr: number[] = new Array(n + 2);
  arr[0] = 1;
  arr[n + 1] = 1;
  for (let i = 1; i <= n; i++) {
    arr[i] = nums[i - 1]!;
  }
  const dp: number[][] = Array.from(new Array(n + 2)).map(() =>
    new Array(n + 2).fill(0)
  );
  // 开区间长度
  for (let len = 3; len <= n + 2; len++) {
    // i表示开区间左端点
    for (let i = 0; i <= n + 2 - len; i++) {
      let res = 0;
      // k为开区间内的索引
      for (let k = i + 1; k < i + len - 1; k++) {
        let left = dp[i]![k]!;
        let right = dp[k]![i + len - 1]!;
        res = Math.max(
          res,
          left + arr[i]! * arr[k]! * arr[i + len - 1]! + right
        );
      }
      dp[i]![i + len - 1] = res;
    }
  }

  return dp[0]![n + 1]!;
}
