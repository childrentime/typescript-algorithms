export function maxProduct(nums: number[]): number {
  const n = nums.length;
  let min = nums[0]!;
  let max = nums[0]!;
  let answer = nums[0]!;
  for (let i = 1; i < n; i++) {
    let mi = min;
    let ma = max;
    min = Math.min(nums[i]!, nums[i]! * mi, nums[i]! * ma);
    max = Math.max(nums[i]!, nums[i]! * ma, nums[i]! * mi);
    answer = Math.max(answer, max);
  }
  return answer;
}
