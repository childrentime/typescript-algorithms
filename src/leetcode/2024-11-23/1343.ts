/**
 * 
 * @param arr 输入：arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
输出：3
解释：子数组 [2,5,5],[5,5,5] 和 [5,5,8] 的平均值分别为 4，5 和 6 。其他长度为 3 的子数组的平均值都小于 4 （threshold 的值)。
 * @param k 
 * @param threshold 
 */
export function numOfSubarrays(
  arr: number[],
  k: number,
  threshold: number
): number {
  let expect = k * threshold;
  let result = 0;
  let left = 0;
  let right = k;
  let array = arr.slice(left, right);
  let sum = 0;
  for (let i = left; i < right; i++) {
    sum += array[i]!;
  }
  while (right <= arr.length) {
    if (sum >= expect) {
      result++;
    }
    sum = sum - arr[left]!;
    left++;
    sum = sum + arr[right]!;
    right++;
  }
  return result;
}

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
