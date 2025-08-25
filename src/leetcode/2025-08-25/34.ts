/**
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]

 */
export function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1];

  // 找左边界：找到第一个 >= target 的位置
  const findLeft = (): number => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const mid = (left + right) >>> 1;  // 向下取整
      if (nums[mid]! >= target) {
        right = mid;  // 可能是答案，保留
      } else {
        left = mid + 1;  // 肯定不是答案
      }
    }
    return left;
  };

  // 找右边界：找到最后一个 <= target 的位置
  const findRight = (): number => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const mid = (left + right + 1) >>> 1;  // 向上取整，避免死循环
      if (nums[mid]! <= target) {
        left = mid;  // 可能是答案，保留
      } else {
        right = mid - 1;  // 肯定不是答案
      }
    }
    return left;
  };

  const leftBound = findLeft();

  // 如果左边界位置的值不等于target，说明target不存在
  if (nums[leftBound] !== target) {
    return [-1, -1];
  }

  const rightBound = findRight();

  return [leftBound, rightBound];
};


// console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))