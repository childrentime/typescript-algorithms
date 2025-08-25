/**
整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。


 */ // 4 8 7 6 5 4 3 =>  54678  48758 => 48785  48785 => 48578
export function nextPermutation(nums: number[]): void {
  let findBreak = false;
  let breakIndex = -1;
  const n = nums.length;
  let right = n - 2;
  while (right >= 0) {
    if (nums[right]! < nums[right + 1]!) {
      findBreak = true;
      breakIndex = right;
      break;
    }
    right--;
  }
  if (!findBreak) {
    nums.reverse();
    return;
  }
  right = nums.length - 1;
  while (nums[right]! <= nums[breakIndex]!) {
    right--
  }
  [nums[right], nums[breakIndex]] = [nums[breakIndex]!, nums[right]!];
  right = nums.length - 1;
  let index = breakIndex + 1
  while (index < right) {
    [nums[index], nums[right]] = [nums[right]!, nums[index]!]
    index++;
    right--;
  }
};

const arr = [1, 5, 1]
nextPermutation(arr);
console.log('arr', arr)