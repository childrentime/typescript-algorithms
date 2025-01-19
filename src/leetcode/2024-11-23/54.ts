/**
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

 */
export function spiralOrder(matrix: number[][]): number[] {
  let top = 0;
  let left = 0;
  let right = matrix[0]!.length - 1;
  let bottom = matrix.length - 1;

  const result: number[] = [];
  while (top <= bottom && left <= right) {
    // top left-right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top]![i]!);
    }
    top++;
    // right top-bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i]![right]!);
    }
    right--;
    if (top <= bottom) {
      // bottom right-left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom]![i]!);
      }
      bottom--;
    }
    if (left <= right) {
      // left bottom-top
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i]![left]!);
      }
      left++;
    }
  }
  return result;
}
