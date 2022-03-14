export function findDuplicate(nums: number[]): number {
  let left = 1;
  let right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >>> 1;
    let count = 0;
    for (const num of nums) {
      if (num <= mid) {
        count++;
      }
    }
    if (count > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
