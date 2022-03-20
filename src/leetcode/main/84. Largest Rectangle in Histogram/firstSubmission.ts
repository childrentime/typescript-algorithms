export function largestRectangleArea(heights: number[]): number {
  const left: number[] = [];
  let stack: number[] = [];
  const n = heights.length;
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]!]! >= heights[i]!) {
      stack.pop();
    }
    left[i] = stack[stack.length - 1] ?? -1;
    stack.push(i);
  }
  const right: number[] = [];
  stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]!]! >= heights[i]!) {
      stack.pop();
    }
    right[i] = stack[stack.length - 1] ?? n;
    stack.push(i);
  }
  let answer = 0;
  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, (right[i]! - left[i]! - 1) * heights[i]!);
  }
  return answer;
}
