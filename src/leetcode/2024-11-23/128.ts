/**
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题
输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */
export function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  let result: number = 1;
  const set = new Set<number>(nums);
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]!;
    if (set.has(num + 1)) {
      continue;
    }
    let counter = 1;
    while (set.has(num - 1)) {
      num--;
      counter++;
    }
    result = Math.max(result, counter);
  }
  return result;
}
