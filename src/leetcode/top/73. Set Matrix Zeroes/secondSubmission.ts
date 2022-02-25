export function setZeroes(matrix: number[][]): void {
  const max = 2 ** 31;
  const m = matrix.length;
  const n = matrix[0]!.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i]![j] === 0) {
        for (let j = 0; j < n; j++) {
          if (matrix[i]![j] !== 0) {
            matrix[i]![j] = max;
          }
        }
        for (let i = 0; i < m; i++) {
          if (matrix[i]![j!] !== 0) {
            matrix[i]![j!] = max;
          }
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i]![j] === max) {
        matrix[i]![j] = 0;
      }
    }
  }
}
