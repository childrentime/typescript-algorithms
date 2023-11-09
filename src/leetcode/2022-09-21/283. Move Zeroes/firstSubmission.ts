export default function moveZeroes(nums: number[]): void {
  let last = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      [nums[i], nums[last]] = [nums[last]!, nums[i]!];
      last++;
    }
  }
}
