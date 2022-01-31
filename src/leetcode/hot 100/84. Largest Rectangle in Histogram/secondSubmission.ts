export function largestRectangleArea(heights: number[]): number {
  const n = heights.length;
  let answer = 0;

  for (let middle = 0; middle < n; middle++) {
    let height = heights[middle]!;
    let left = middle;
    let right = middle;
    while (left - 1 >= 0 && heights[left - 1]! >= heights[middle]!) {
      left--;
    }
    while (right + 1 < n && heights[right + 1]! >= heights[middle]!) {
      right++;
    }

    answer = Math.max(answer, (right - left + 1) * height);
  }
  return answer;
}
