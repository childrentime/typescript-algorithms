/**
 * LeetCode 283: Move Zeroes
 * 
 * 题目描述：
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 注意：
 * 1. 必须在不复制数组的情况下原地对数组进行操作
 * 2. 尽量减少操作次数
 * 
 * 示例 1:
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 示例 2:
 * 输入: nums = [0]
 * 输出: [0]
 * 
 * 提示：
 * - 1 <= nums.length <= 10^4
 * - -2^31 <= nums[i] <= 2^31 - 1
 */

/**
 * 方法一：双指针 - 最优解法
 * 
 * 思路：
 * 1. 使用两个指针 left 和 right
 * 2. left 指向下一个非零元素应该放置的位置
 * 3. right 遍历整个数组
 * 4. 当 right 指向非零元素时，将其与 left 位置交换，然后 left++
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
export function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right]!, nums[left]!];
      left++;
    }
    right++
  }
}

const arr = [0, 1, 0, 3, 12]
moveZeroes(arr);
console.log('arr', arr)