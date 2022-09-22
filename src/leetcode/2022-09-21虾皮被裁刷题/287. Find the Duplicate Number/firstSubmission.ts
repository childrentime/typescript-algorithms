export default function findDuplicate(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + ((right - left) >>> 1);

    let count = 0;
    for (let num of nums) {
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
