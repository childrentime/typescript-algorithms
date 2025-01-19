/**
给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地 对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

必须在不使用库内置的 sort 函数的情况下解决这个问题。

输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
 */
function sortColors(nums: number[]): void {
  // 2换到前头 0换到后头
  const len = nums.length;
  let right = len - 1;
  for (let left = 0; left < len; left++) {
    while (nums[left] === 2 && left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
  }
  console.log('nums', nums);

  let l = 0;
  for (let r = len - 1; r >= 0; r--) {
    while (nums[r] === 0 && l <= r) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
    }
  }
}

const arr = [2, 0, 2, 1, 1, 0];
sortColors(arr);
console.log(arr);
