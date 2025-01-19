/**
给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
注意：答案中不可以包含重复的三元组。
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
[-4,-1,-1,0,1,2]
 */

// -2, 0, 1, 1, 2]
// [0,0,0]
// [0,0,0,0]
export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i]! > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i]! + nums[left]! + nums[right]!;
      console.log('sum', sum);
      if (sum > 0) {
        while (nums[right - 1] === nums[right]) {
          right--;
        }
        right--;
      } else if (sum < 0) {
        while (nums[left + 1] === nums[left]) {
          left++;
        }
        left++;
      } else {
        result.push([nums[i]!, nums[left]!, nums[right]!]);
        while (nums[left + 1] === nums[left]) {
          left++;
        }
        while (nums[right - 1] === nums[right]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
