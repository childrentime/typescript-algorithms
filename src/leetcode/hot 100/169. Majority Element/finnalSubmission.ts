export function majorityElement(nums: number[]): number {
  let n = nums.length;
  let res = 0;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (count === 0) {
      res = nums[i]!;
    }
    if (res === nums[i]!) {
      count++;
    } else {
      count--;
    }
  }
  return res;
}
