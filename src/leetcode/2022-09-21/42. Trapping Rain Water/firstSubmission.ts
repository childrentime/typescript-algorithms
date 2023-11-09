export default function trap(height: number[]): number {
  const stack: number[] = [];
  let answer = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i]! > height[stack[stack.length - 1]!]!) {
      const middle = stack.pop()!;
      if (!stack.length) {
        break;
      }

      const w = i - stack[stack.length - 1]! - 1;
      const h =
        Math.min(height[i]!, height[stack[stack.length - 1]!]!) -
        height[middle]!;

      answer += w * h;
    }

    stack.push(i);
  }

  return answer;
}
