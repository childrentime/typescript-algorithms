export function trap(height: number[]): number {
  const stack: number[] = [];
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[stack[stack.length - 1]!]! < height[i]!) {
      const index = stack.pop()!;
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1]!;
      const w = i - left - 1;
      const h = Math.min(height[left]!, height[i]!);
      result += w * (h - height[index]!);
    }
    stack.push(i);
  }
  return result;
}
