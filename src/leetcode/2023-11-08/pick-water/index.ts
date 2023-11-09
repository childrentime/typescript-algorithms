export function trap(height: number[]): number {
  let result: number = 0;
  const stack: number[] = [];
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i]! > height[stack[stack.length - 1]!]!) {
      const top = stack.pop()!;
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1]!;
      result =
        result +
        (i - left - 1) * (Math.min(height[i]!, height[left]!) - height[top]!);
    }
    stack.push(i);
  }

  return result;
}
