function maxProduct(nums: number[]): number {
  let mx = nums[0]!;
  let mn = nums[0]!;
  let res = nums[0]!;
  for (let i = 1; i < nums.length; i++) {
    let max = mx;
    let min = mn;
    mx = Math.max(nums[i]!, Math.max(nums[i]! * max, nums[i]! * min));
    mn = Math.min(nums[i]!, Math.min(nums[i]! * max, nums[i]! * min));
    res = Math.max(res, mx);
  }
  return res;
}
