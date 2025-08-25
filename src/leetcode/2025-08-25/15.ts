/**
输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。

考虑[0,0,0,0,0] [0,0,0,0]  结果都是[0,0,0]
 */
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    while (i !== 0 && nums[i] === nums[i - 1]) {
      i++;
    }
    if (i >= nums.length - 1) {
      break;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i]! + nums[left]! + nums[right]!
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++
      } else {
        result.push([nums[i]!, nums[left]!, nums[right]!]);
        left++;
        right--;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))