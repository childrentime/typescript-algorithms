export function rotate(matrix: number[][]): void {
  const m = matrix.length;
  for (let i = 0; i < m >>> 1; i++) {
    for (let j = 0; j < (m + 1) >>> 1; j++) {
      const temp = matrix[i]![j]!;
      matrix[i]![j] = matrix[m - j - 1]![i]!;
      matrix[m - j - 1]![i] = matrix[m - i - 1]![m - j - 1]!;
      matrix[m - i - 1]![m - j - 1] = matrix[j]![m - i - 1]!;
      matrix[j]![m - i - 1] = temp;
    }
  }
}
