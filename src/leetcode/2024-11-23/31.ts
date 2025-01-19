/**
输入：nums = [1,2,3]
输出：[1,3,2]
 */
export function nextPermutation(nums: number[]): void {
  // 9868743
  // 找到第一个破坏的，与右边第一个比它大的互换，然后反转右边
  let firstBreakIndex = -1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i - 1]! < nums[i]!) {
      firstBreakIndex = i - 1;
      break;
    }
  }

  if (firstBreakIndex === -1) {
    nums.reverse();
  } else {
    let firstBigIndex = -1;
    for (let i = nums.length - 1; i >= 0; i--) {
      if (nums[i]! > nums[firstBreakIndex]!) {
        firstBigIndex = i;
        break;
      }
    }
    [nums[firstBigIndex], nums[firstBreakIndex]] = [
      nums[firstBreakIndex]!,
      nums[firstBigIndex]!
    ];
    let left = firstBreakIndex + 1;
    let right = nums.length - 1;
    const part = nums.splice(left, right);
    nums.splice(left, 0, ...part.reverse());
  }
}
