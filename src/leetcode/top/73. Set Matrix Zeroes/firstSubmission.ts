/**
 Do not return anything, modify matrix in-place instead.
 */
export function setZeroes(matrix: number[][]): void {
  const location: number[][] = [];
  const m = matrix.length;
  const n = matrix[0]!.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i]![j] === 0) {
        location.push([i, j]);
      }
    }
  }
  for (const [i, j] of location) {
    for (let j = 0; j < n; j++) {
      matrix[i!]![j] = 0;
    }
    for (let i = 0; i < m; i++) {
      matrix[i!]![j!] = 0;
    }
  }
}
