/**
 Do not return anything, modify matrix in-place instead.
 */
// nums[i][j] = nums[j][n-i-1]
export function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const newMatrix: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newMatrix[j]![n - i - 1] = matrix[i]![j]!;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i]![j] = newMatrix[i]![j]!;
    }
  }
}
