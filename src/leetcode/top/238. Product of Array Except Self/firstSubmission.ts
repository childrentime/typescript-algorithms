export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const left: number[] = [1];
  const right: number[] = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1]! * nums[i - 1]!;
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1]! * nums[i + 1]!;
  }
  const answer: number[] = [];
  for (let i = 0; i < n; i++) {
    answer.push(left[i]! * right[i]!);
  }
  return answer;
}
