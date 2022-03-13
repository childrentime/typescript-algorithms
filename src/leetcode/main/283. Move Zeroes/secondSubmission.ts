export function moveZeroes(nums: number[]): void {
  const n = nums.length;
  let last = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i]) {
      nums[last] = nums[i]!;
      last++;
    }
  }
  for (let i = last; i < n; i++) {
    nums[i] = 0;
  }
}
