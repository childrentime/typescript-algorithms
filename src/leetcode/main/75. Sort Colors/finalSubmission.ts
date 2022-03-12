export function sortColors(nums: number[]): void {
  let left = 0;
  let right = nums.length - 1;
  let cur = 0;
  while (cur <= right) {
    if (nums[cur] === 2) {
      [nums[cur], nums[right]] = [nums[right]!, nums[cur]!];
      right--;
    } else if (nums[cur] === 0) {
      [nums[cur], nums[left]] = [nums[left]!, nums[cur]!];
      left++;
      cur++;
    } else {
      cur++;
    }
  }
}
