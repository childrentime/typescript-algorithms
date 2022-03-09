export function wiggleSort(nums: number[]): void {
  const arr = nums.sort((a, b) => a - b).slice();
  const n = arr.length;
  let j = n - 1;
  let i = j >> 1;
  let k = 0;
  while (k < n) {
    if (k & 1) {
      nums[k] = arr[j--]!;
    } else {
      nums[k] = arr[i--]!;
    }
    k++;
  }
}
