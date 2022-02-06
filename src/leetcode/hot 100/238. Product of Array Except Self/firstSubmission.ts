export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const left = [];
  const right = [];
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1]! * nums[i - 1]!;
  }
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1]! * nums[i + 1]!;
  }

  const answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = left[i]! * right[i]!;
  }

  return answer;
}
