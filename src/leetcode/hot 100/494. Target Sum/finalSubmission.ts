// 数组元素和 sum 负号元素和 neg 正号元素和 sum-neg
// sum-neg-neg  = target
// neg =  sum-target / 2
// 问题转化为 在数组中选取若干数字 使得其元素和为neg 也就是01背包问题
// 其中 dp[i][j] 表示在数组 nums 的前 i 个数中选取元素，使得这些元素之和等于 j 的方案数

export function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  const diff = sum - target;
  if (diff < 0 || (diff & 1) === 1) {
    return 0;
  }
  const n = nums.length;
  const neg = diff >>> 1;
  const dp: number[][] = Array.from(new Array(n + 1)).map(() =>
    new Array(neg + 1).fill(0)
  );
  dp[0]![0] = 1;
  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1]!;
    for (let j = 0; j <= neg; j++) {
      dp[i]![j] = dp[i - 1]![j]!;
      if (j >= num) {
        dp[i]![j] += dp[i - 1]![j - num]!;
      }
    }
  }

  return dp[n]![neg]!;
}
