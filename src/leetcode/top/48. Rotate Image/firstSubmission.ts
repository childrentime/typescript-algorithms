/**
  Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      const temp = matrix[i]![j]!;
      matrix[i]![j] = matrix[n - j - 1]![i]!;
      matrix[n - j - 1]![i] = matrix[n - i - 1]![n - j - 1]!;
      matrix[n - i - 1]![n - j - 1] = matrix[j]![n - i - 1]!;
      matrix[j]![n - i - 1] = temp;
    }
  }
}
