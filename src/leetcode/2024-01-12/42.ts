export function trap(height: number[]): number {
  const stack: number[] = [];
  let result: number = 0;
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[stack[stack.length - 1]!]! < height[i]!) {
      const current = stack.pop()!;
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1]!;
      const sum =
        (i - left - 1) *
        (Math.min(height[i]!, height[left]!) - height[current]!);
      result += sum;
    }
    stack.push(i);
  }
  return result;
}
