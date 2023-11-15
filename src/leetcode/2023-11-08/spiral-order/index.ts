export function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  const m = matrix.length;
  const n = matrix[0]!.length;

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top]![i]!);
    }
    for (let j = top; j < bottom; j++) {
      result.push(matrix[j]![right]!);
    }
    for (let i = right; i > left; i--) {
      result.push(matrix[bottom]![i]!);
    }
    for (let j = bottom; j > top; j--) {
      result.push(matrix[j]![left]!);
    }
    left++;
    right--;
    top++;
    bottom--;
  }

  if (top === bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top]![i]!);
    }
  } else if (left === right) {
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i]![left]!);
    }
  }

  return result;
}
