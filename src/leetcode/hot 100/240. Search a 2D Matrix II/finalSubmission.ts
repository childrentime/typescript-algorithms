// 对于左上角的元素来说 左边的元素比它小 下面的元素比它大
// 所以从左上角开始查找
// 就像二分查找 左边比它小 右边比它大一样
export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0]!.length;
  let x = 0;
  let y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x]![y] === target) {
      return true;
    }
    if (matrix[x]![y]! > target) {
      y--;
    } else {
      x++;
    }
  }

  return false;
}
