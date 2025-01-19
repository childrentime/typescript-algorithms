/**
给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 
子数组
（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。

输入: nums = [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。

 */
// [2,3,-2,-2] 很明显，最后一项的最大值取决于 前三项的最大乘积*自身 或则最小乘积*自身 或者自身
// 乘数效应，肯定是能乘上就乘上
export function maxProduct(nums: number[]): number {
  const n = nums.length;
  const dpMax: number[] = [nums[0]!];
  const dpMin: number[] = [nums[0]!];
  let result: number = nums[0]!;
  for (let i = 1; i < n; i++) {
    dpMax[i] = Math.max(
      nums[i]!,
      dpMax[i - 1]! * nums[i]!,
      dpMin[i - 1]! * nums[i]!
    );
    dpMin[i] = Math.min(
      nums[i]!,
      dpMax[i - 1]! * nums[i]!,
      dpMin[i - 1]! * nums[i]!
    );
    result = Math.max(result, dpMax[i]!);
  }
  return result;
}

console.log(maxProduct([2, 3, -2, 4]));
