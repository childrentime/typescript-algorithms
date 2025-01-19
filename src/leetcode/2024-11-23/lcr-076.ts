export function findKthLargest(nums: number[], k: number): number {
  const len = nums.length;
  const target = len - k;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    const part = partition(nums, left, right);
    if (part < target) {
      left = part + 1;
    } else if (part > target) {
      right = part - 1;
    } else {
      return nums[part]!;
    }
  }

  return nums[target]!;
}

const partition = (arr: number[], left: number, right: number) => {
  const part = arr[left]!;

  while (left < right) {
    while (left < right && arr[right]! >= part) {
      right--;
    }

    arr[left] = arr[right]!;

    while (left < right && arr[left]! < part) {
      left++;
    }

    arr[right] = arr[left]!;
  }

  arr[left] = part;

  return left;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
