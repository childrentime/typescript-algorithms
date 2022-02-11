// 其中 dp[i][j] 表示从数组的 [0,i]
// 下标范围内选取若干个正整数（可以是 0 个），
// 是否存在一种选取方案使得被选取的正整数的和等于 j。
export function canPartition(nums: number[]): boolean {
  let max = -Infinity;
  const sum = nums.reduce((pre, cur) => {
    if (cur > max) {
      max = cur;
    }
    return pre + cur;
  }, 0);
  if (sum & 1) {
    return false;
  }
  const target = sum >>> 1;
  const n = nums.length;
  if (max > target) {
    return false;
  }
  const dp: boolean[][] = Array.from(new Array(n)).map(() =>
    new Array(target + 1).fill(false)
  );

  for (let i = 0; i < n; i++) {
    dp[i]![0] = true;
  }
  dp[0]![nums[0]!] = true;
  for (let i = 1; i < n; i++) {
    const num = nums[i]!;
    for (let j = 1; j <= target; j++) {
      if (j >= num) {
        dp[i]![j] = dp[i - 1]![j]! || dp[i - 1]![j - num]!;
      } else {
        dp[i]![j] = dp[i - 1]![j]!;
      }
    }
  }

  return dp[n - 1]![target]!;
}
