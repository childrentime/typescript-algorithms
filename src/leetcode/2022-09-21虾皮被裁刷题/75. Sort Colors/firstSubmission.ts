export default function sortColors(nums: number[]): void {
  let left = 0;
  let right = nums.length - 1;
  for (let i = 0; i <= right; i++) {
    if (nums[i] === 2) {
      while (nums[i] === 2 && i <= right) {
        [nums[right], nums[i]] = [nums[i]!, nums[right]!];
        right--;
      }
    }
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i]!, nums[left]!];
      left++;
    }
  }
}
