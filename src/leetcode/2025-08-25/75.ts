/**
给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

必须在不使用库内置的 sort 函数的情况下解决这个问题。

 

示例 1：

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
示例 2：

输入：nums = [2,0,1]
输出：[0,1,2]
 */
export function sortColors(nums: number[]): void {
  let left = 0;
  let p = 0;
  while (p < nums.length) {
    if (nums[p] === 0) {
      [nums[p], nums[left]] = [nums[left]!, nums[p]!];
      left++
    }
    p++;
  }

  let right = nums.length - 1;
  p = nums.length - 1;
  while (p >= 0) {
    if (nums[p] === 2) {
      [nums[p], nums[right]] = [nums[right]!, nums[p]!];
      right--;
    }
    p--;
  }
};

const arr = [2, 0, 2, 1, 1, 0]
sortColors([2, 0, 2, 1, 1, 0]);
console.log(arr)