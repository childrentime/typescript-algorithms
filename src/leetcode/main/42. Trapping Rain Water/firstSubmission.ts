export function trap(height: number[]): number {
  const stack: number[] = [];
  let answer = 0;
  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i]! > height[stack[stack.length - 1]!]!) {
      const item = stack.pop()!;
      if (!stack.length) {
        break;
      }
      const top = stack[stack.length - 1]!;

      const width = i - top - 1;
      const h = Math.min(height[i]!, height[top]!) - height[item]!;

      answer += h * width;
    }

    stack.push(i);
  }
  return answer;
}
