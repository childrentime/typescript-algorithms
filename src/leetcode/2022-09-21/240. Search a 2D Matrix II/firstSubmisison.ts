export default function searchMatrix(
  matrix: number[][],
  target: number
): boolean {
  const m = matrix.length;
  const n = matrix[0]!.length;

  let i = 0;
  let j = n - 1;

  while (i <= m - 1 && j >= 0) {
    if (target > matrix[i]![j]!) {
      i++;
    } else if (target < matrix[i]![j]!) {
      j--;
    } else {
      return true;
    }
  }

  return false;
}
