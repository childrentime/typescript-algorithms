// 对于每根柱子 分别找左边和右边比它小的第一个数
export function largestRectangleArea(heights: number[]): number {
  const left: number[] = [];
  const right: number[] = [];
  const n = heights.length;
  let stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[stack[stack.length - 1]!]! >= heights[i]!) {
      stack.pop();
    }
    left[i] = stack[stack.length - 1] ?? -1;
    stack.push(i);
  }

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
    answer = Math.max(answer, heights[i]! * (right[i]! - left[i]! - 1));
  }
  return answer;
}
