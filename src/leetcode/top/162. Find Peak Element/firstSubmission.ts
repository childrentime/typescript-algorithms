export function findPeakElement(nums: number[]): number {
  const stack = [0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]! < nums[stack[stack.length - 1]!]!) {
      return stack.pop()!;
    }
    stack.push(i);
  }
  return nums.length - 1;
}
