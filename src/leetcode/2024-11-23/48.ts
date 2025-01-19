/**
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]

t[0][2] = o[0][0]
t[2][2] = o[0][2]
t[2][1] = o[1][2]
t[1][2] = o[0][1]
t[1][1] = o[1][1]

t[i][j] =  o[2-j][i]
 */
export function rotate(matrix: number[][]): void {
  // 1. 转
  const m = matrix[0]!.length;
  const n = matrix.length;
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 逆
  for (let i = 0; i < m; i++) {
    matrix[i]?.reverse();
  }
}
