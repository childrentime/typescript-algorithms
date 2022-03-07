export function findKthLargest(nums: number[], k: number): number {
  const partition = (left: number, right: number) => {
    let x = nums[left]!;
    while (left < right) {
      while (left < right && nums[right]! >= x) {
        right--;
      }
      nums[left] = nums[right]!;
      while (left < right && nums[left]! <= x) {
        left++;
      }
      nums[right] = nums[left]!;
    }
    nums[left] = x;
    return left;
  };
  let left = 0;
  let right = nums.length - 1;
  k = nums.length - k;
  while (left < right) {
    const p = partition(left, right);
    if (p < k) {
      left = p + 1;
    } else if (p > k) {
      right = p - 1;
    } else {
      return nums[p]!;
    }
  }

  return nums[left]!;
}
