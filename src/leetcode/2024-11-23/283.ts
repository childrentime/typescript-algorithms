/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
 */

// 0 1 0 3 12
// 1 0 0 3 12
// 1 3 0 0 12
// 1 3 12 0 0
export function moveZeroes(nums: number[]): void {
  let findZero = 0;
  let findNumber = 0;
  const len = nums.length;
  while (findNumber < len) {
    // findNumber
    while (nums[findNumber] === 0 && findNumber < len) {
      findNumber++;
    }
    // findZero
    while (nums[findZero] !== 0 && findZero < len) {
      findZero++;
    }
    if (findNumber >= len || findZero >= len) {
      break;
    }
    // swap
    if (findNumber > findZero) {
      [nums[findNumber], nums[findZero]] = [nums[findZero]!, nums[findNumber]!];
    } else {
      findNumber++;
    }
  }
}

const arr = [1, 0, 1];
moveZeroes(arr);
console.log(arr);
