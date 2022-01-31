export function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    let minHeight = Number.MAX_VALUE;
    for (let j = 0; j < n; j++) {
      minHeight = Math.min(minHeight, heights[j]!);

      answer = Math.max(answer, (j - i + 1) * minHeight);
    }
  }

  return answer;
}
