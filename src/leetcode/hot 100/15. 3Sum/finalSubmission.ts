export function threeSum(nums: number[]): number[][] {
  const res: number[][] = []; // 结果数组
  nums.sort((a, b) => a - b); // 先对给定数组进行排序
  // 循环双指针算法
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]! > 0) {
      return res;
    } // 防止基点出现重复
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left: number = i + 1; // 声明左指针
    let right: number = nums.length - 1; // 声明右指针
    while (left < right) {
      let sum: number = nums[i]! + nums[left]! + nums[right]!; // 总和
      // 三数和情况1
      if (sum === 0) {
        // 防止左指针重复解
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        } // 防止右指针出现重复解
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        } // 把当前组合加入结果数组
        res.push([nums[i]!, nums[left]!, nums[right]!]);
        left++;
        right--;
        // 三数和情况2
      } else if (sum < 0) {
        left++;
        // 三数和情况3
      } else {
        right--;
      }
    }
  }
  return res;
}
