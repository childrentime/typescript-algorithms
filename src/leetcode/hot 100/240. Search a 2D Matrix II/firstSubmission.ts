export function searchMatrix(matrix: number[][], target: number): boolean {
  const binarySearch = (nums: number[], target: number): number => {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
      const mid = ~~((high - low) / 2) + low;
      const num = nums[mid]!;
      if (num === target) {
        return mid;
      } else if (num > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  };

  for (const row of matrix) {
    if (~binarySearch(row, target)) {
      return true;
    }
  }

  return false;
}
