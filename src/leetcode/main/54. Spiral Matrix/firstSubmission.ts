export function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0]!.length;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;
  let answer: number[] = [];
  while (left < right && top < bottom) {
    for (let i = left; i <= right; i++) {
      answer.push(matrix[top]![i]!);
    }
    for (let i = top + 1; i <= bottom; i++) {
      answer.push(matrix[i]![right]!);
    }
    for (let i = right - 1; i >= left; i--) {
      answer.push(matrix[bottom]![i]!);
    }
    for (let i = bottom - 1; i > top; i--) {
      answer.push(matrix[i]![left]!);
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  if (top === bottom) {
    for (let i = left; i <= right; i++) {
      answer.push(matrix[top]![i]!);
    }
  } else if (right === left) {
    for (let i = top; i <= bottom; i++) {
      answer.push(matrix[i]![left]!);
    }
  }
  return answer;
}
