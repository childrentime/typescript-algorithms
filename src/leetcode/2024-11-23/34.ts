/**
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
 */
export function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;
  const result: number[] = [];
  while (left <= right) {
    let middle = left + ((right - left) >>> 1);
    if (nums[middle]! < target) {
      left = middle + 1;
    } else if (nums[middle]! > target) {
      right = middle - 1;
    } else {
      // 找到了
      while (nums[middle - 1] === nums[middle]) {
        middle--;
      }
      result.push(middle);
      while (nums[middle + 1] === nums[middle]) {
        middle++;
      }
      result.push(middle);
      break;
    }
  }

  return result.length === 0 ? [-1, -1] : result;
}

console.log(searchRange([1], 1));
