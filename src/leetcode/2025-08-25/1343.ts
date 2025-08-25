/**
 * 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 * 
 * 题目描述：
 * 给你一个整数数组 arr 和两个整数 k 和 threshold。
 * 请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。
 * 
 * 示例 1：
 * 输入：arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
 * 输出：3
 * 解释：子数组 [2,5,5]、[5,5,5] 和 [5,5,8] 的平均值分别为 4、5 和 6。
 * 其他长度为 3 的子数组的平均值都小于 4（threshold 的值）。
 * 
 * 示例 2：
 * 输入：arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
 * 输出：6
 * 解释：前 6 个长度为 3 的子数组平均值都大于 5。注意平均值不是整数。
 * 
 * 提示：
 * - 1 <= arr.length <= 10^5
 * - 1 <= arr[i] <= 10^4
 * - 1 <= k <= arr.length
 * - 0 <= threshold <= 10^4
 */

export function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  let count = 0;
  const value = k * threshold;
  let left = 0;
  let right = k - 1;
  const window = arr.slice(left, right + 1);
  let sum = window.reduce((pre, cur) => pre + cur, 0);
  while (left <= right && right <= arr.length - 1) {
    if (sum >= value) {
      count++;
    }
    right++;
    sum = sum + arr[right]! - arr[left]!;
    left++;
  }
  return count;
}

// 测试用例
console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)); // 输出: 3
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)); // 输出: 6
console.log(numOfSubarrays([1, 1, 1, 1, 1], 1, 0))

