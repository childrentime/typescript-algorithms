/**
 Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  for (let i = nums.length - 1; i >= 0; i--) {
    let zeroCount = 0;
    while (nums[i] === 0 && i >= 0) {
      i--;
      zeroCount++;
    }

    if (zeroCount !== 0) {
      nums.splice(i + 1, zeroCount);
    }

    for (let i = 0; i < zeroCount; i++) {
      nums.push(0);
    }
  }
}
