export function findDuplicate(nums: number[]): number {
  const n = nums.length;
  let ans = 0;
  // 确定二进制下最高位是多少
  let bit_max = 31;
  while (!((n - 1) >> bit_max)) {
    bit_max -= 1;
  }
  for (let bit = 0; bit <= bit_max; ++bit) {
    let x = 0,
      y = 0;
    for (let i = 0; i < n; ++i) {
      if (nums[i]! & (1 << bit)) {
        x += 1;
      }
      if (i >= 1 && i & (1 << bit)) {
        y += 1;
      }
    }
    if (x > y) {
      ans |= 1 << bit;
    }
  }
  return ans;
}
