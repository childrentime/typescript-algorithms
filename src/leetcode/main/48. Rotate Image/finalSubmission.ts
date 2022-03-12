export function rotate(matrix: number[][]): void {
  const m = matrix.length;
  for (let i = 0; i < m; i++) {
    for (let j = i; j < m; j++) {
      [matrix[i]![j], matrix[j]![i]] = [matrix[j]![i]!, matrix[i]![j]!];
    }
  }
  matrix = matrix.map(item => item.reverse());
}
