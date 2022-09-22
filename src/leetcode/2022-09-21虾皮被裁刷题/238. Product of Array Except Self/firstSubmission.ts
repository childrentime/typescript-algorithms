export default function productExceptSelf(nums: number[]): number[] {
  const left: number[] = [1];
  const right: number[] = [];
  right[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1]! * nums[i - 1]!;
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1]! * nums[i + 1]!;
  }

  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(left[i]! * right[i]!);
  }

  return result;
}
