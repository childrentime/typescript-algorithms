export function spiralOrder(matrix: number[][]): number[] {
  const answer: number[] = [];
  const m = matrix.length;
  const n = matrix[0]!.length;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;
  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col++) {
      answer.push(matrix[top]![col]!);
    }
    for (let row = top + 1; row <= bottom; row++) {
      answer.push(matrix[row]![right]!);
    }
    if (left < right && top < bottom) {
      for (let col = right - 1; col >= left; col--) {
        answer.push(matrix[bottom]![col]!);
      }
      for (let row = bottom - 1; row > top; row--) {
        answer.push(matrix[row]![left]!);
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return answer;
}
