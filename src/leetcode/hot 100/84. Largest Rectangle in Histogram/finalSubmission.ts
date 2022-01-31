// 解题关键思路： 找到每根柱子的两边比他小的值
// Key idea: Find values that are smaller than him on both sides of each pillar
export function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  let answer = 0;

  const left: number[] = [];
  const right: number[] = [];

  let stack = [-1];

  // 2 1 5 6 3 2
  // 1 2 3 4 7
  for (let i = 0; i < n; i++) {
    while (heights[stack[stack.length - 1]!]! >= heights[i]!) {
      stack.pop();
    }

    left[i] = stack[stack.length - 1]!;

    stack.push(i);
  }

  stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (
      stack.length !== 0 &&
      heights[stack[stack.length - 1]!]! >= heights[i]!
    ) {
      stack.pop();
    }

    right[i] = stack[stack.length - 1] ?? n;

    stack.push(i);
  }

  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, (right[i]! - left[i]! - 1) * heights[i]!);
  }

  return answer;
}
