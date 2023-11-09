export default function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0]!.length;

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;

  const arr: number[] = [];

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      arr.push(matrix[top]![i]!);
    }
    for (let j = top; j < bottom; j++) {
      arr.push(matrix[j]![right]!);
    }
    for (let i = right; i > left; i--) {
      arr.push(matrix[bottom]![i]!);
    }
    for (let j = bottom; j > top; j--) {
      arr.push(matrix[j]![left]!);
    }

    left++;
    right--;
    top++;
    bottom--;
  }

  if (top === bottom) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top]![i]!);
    }
  } else if (right === left) {
    for (let i = top; i <= bottom; i++) {
      arr.push(matrix[i]![left]!);
    }
  }

  return arr;
}
