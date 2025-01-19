/**
 *
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0]!.length;

  let i = m - 1;
  let j = 0;
  while (i >= 0 && j < n) {
    const current = matrix[i]![j]!;
    if (current > target) {
      i--;
    } else if (current < target) {
      j++;
    } else {
      return true;
    }
  }

  return false;
}
