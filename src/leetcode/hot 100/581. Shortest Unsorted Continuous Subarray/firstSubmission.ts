// 遍历数组 该位置的数字是否是当前的最小值 如果不是则该位置是一个候选答案
export function findUnsortedSubarray(nums: number[]): number {
  const n = nums.length;
  let max = -Infinity;
  let min = Infinity;
  let left = -1;
  let right = -1;
  for (let i = 0; i < n; i++) {
    if (max > nums[i]!) {
      right = i;
    } else {
      max = nums[i]!;
    }
    if (min < nums[n - i - 1]!) {
      left = n - i - 1;
    } else {
      min = nums[n - i - 1]!;
    }
  }
  return right === -1 ? 0 : right - left + 1;
}
