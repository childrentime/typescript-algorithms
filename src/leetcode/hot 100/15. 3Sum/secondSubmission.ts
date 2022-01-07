export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    // 数组排好序之和 小的数一定在左侧 大的数一定在右侧
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let right = nums.length - 1;
    const target = -nums[i]!;

    for (let left = i + 1; left < nums.length; left++) {
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        continue;
      }

      while (left < right && nums[left]! + nums[right]! > target) {
        right--;
      }

      if (left === right) {
        break;
      }

      if (nums[left]! + nums[right]! === target) {
        result.push([nums[left]!, nums[right]!, nums[i]!]);
      }
    }
  }

  return result;
}
