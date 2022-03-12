export function sortColors(nums: number[]): void {
  let left = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left]!, nums[i]!];
      left++;
    }
  }
  for (let i = left; i < n; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[left]] = [nums[left]!, nums[i]!];
      left++;
    }
  }
}
