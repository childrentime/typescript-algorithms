export function productExceptSelf(nums: number[]): number[] {
  const left: number[] = [1];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1]! * nums[i - 1]!;
  }
  const right: number[] = [];
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1]! * nums[i + 1]!;
  }
  const answer: number[] = [];
  for (let i = 0; i < n; i++) {
    answer.push(right[i]! * left[i]!);
  }
  return answer;
}
