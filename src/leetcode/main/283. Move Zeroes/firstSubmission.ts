// 0 1 0 3 12
export function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let last = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i]) {
      [nums[last], nums[i]] = [nums[i]!, nums[last]!];
      last++;
    }
  }
}
