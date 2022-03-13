// 5 9 8 7   7 9 8 5  7 5 8 9
// 默认右边为降序序列 找到第一个破坏降序序列的 再找降序序列中第一个比这个大的值 在将后面的所有值都反转
export function nextPermutation(nums: number[]): void {
  const n = nums.length;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i]! >= nums[i + 1]!) {
      continue;
    } else {
      for (let j = n - 1; j >= 0; j--) {
        if (nums[j]! > nums[i]!) {
          [nums[i], nums[j]] = [nums[j]!, nums[i]!];
          i = i + 1;
          j = n - 1;
          while (i < j) {
            [nums[i], nums[j]] = [nums[j]!, nums[i]!];
            i++;
            j--;
          }
          return;
        }
      }
    }
  }
  nums = nums.sort((a, b) => a - b);
}
