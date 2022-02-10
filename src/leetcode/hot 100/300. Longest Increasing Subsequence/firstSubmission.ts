// dp数组表示由某个数为最后一个数的序列长度
export function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j]! < nums[i]!) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }

  let answer = 0;
  for (const item of dp) {
    if (item > answer) {
      answer = item;
    }
  }

  return answer;
}
