export default function findKthLargest(nums: number[], k: number): number {
  const partion = (arr: number[], left: number, right: number) => {
    const x = arr[left]!;

    let l = left;
    let r = right;

    while (l < r) {
      while (arr[r]! >= x && l < r) {
        r--;
      }

      arr[l] = arr[r]!;

      while (arr[l]! <= x && l < r) {
        l++;
      }

      arr[r] = arr[l]!;
    }

    arr[l] = x;
    return l;
  };

  let left = 0;
  let right = nums.length - 1;

  k = nums.length - k;
  while (left < right) {
    const part = partion(nums, left, right);
    if (part < k) {
      left = part + 1;
    } else if (part > k) {
      right = part - 1;
    } else {
      return nums[k]!;
    }
  }

  return nums[k]!;
}
