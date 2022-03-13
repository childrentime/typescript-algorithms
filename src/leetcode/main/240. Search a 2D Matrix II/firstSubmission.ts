export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0]!.length;
  let i = 0;
  let j = n - 1;
  while (i >= 0 && i < m && j >= 0 && j < n) {
    if (matrix[i]![j]! > target) {
      j--;
    } else if (matrix[i]![j]! < target) {
      i++;
    } else {
      return true;
    }
  }
  return false;
}
