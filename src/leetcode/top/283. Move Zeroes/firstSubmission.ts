export function moveZeroes(nums: number[]): void {
  let left = 0;
  let right = 0;
  const n = nums.length;
  while (right < n) {
    if (nums[right]) {
      [nums[left], nums[right]] = [nums[right]!, nums[left]!];
      left++;
    }
    right++;
  }
}
