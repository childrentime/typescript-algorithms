export function rotate(nums: number[], k: number): void {
  const reverse = (start: number, end: number) => {
    while (start < end) {
      const temp = nums[start]!;
      nums[start] = nums[end]!;
      nums[end] = temp;
      start += 1;
      end -= 1;
    }
  };

  k %= nums.length;
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}
