export function gameOfLife(board: number[][]): void {
  /** 行 */
  const lenA = board.length;
  if (!lenA) return;
  /** 列 */
  const lenB = board[0].length;
  // 先复制一个，这里偷个懒
  /** 复制的board */
  const tempBoard: number[][] = JSON.parse(JSON.stringify(board));
  /** 方位坐标 */
  const eightArea: number[][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  // 开始遍历
  for (let a = 0; a < lenA; a++) {
    for (let b = 0; b < lenB; b++) {
      /** 当前位置的值，看它是活细胞还是死细胞 */
      let curVal: number = tempBoard[a][b];
      /** 周围活细胞数 */
      let livedNum: number = 0;
      for (let z of eightArea) {
        // 临时坐标
        let tempA = a + z[0],
          tempB = b + z[1];
        // 判定是否出界
        if (tempA > -1 && tempA < lenA && tempB > -1 && tempB < lenB)
          livedNum += tempBoard[tempA][tempB];
      }
      if (curVal === 1) {
        // 当前是活细胞
        // 少于两个 或 超过三个 则细胞死亡
        if (livedNum < 2 || livedNum > 3) board[a][b] = 0;
        // else 仍然存活，不用更改
      } else {
        // 当前是死细胞
        // 周围有三个活细胞，复活
        if (livedNum === 3) board[a][b] = 1;
      }
    }
  }
}
