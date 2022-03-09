export function gameOfLife(board: number[][]): void {
  const m = board.length;
  const n = board[0]!.length;
  const copy: number[][] = JSON.parse(JSON.stringify(board));
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

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let currentValue: number = copy[i]![j]!;
      let live: number = 0;
      for (let direction of eightArea) {
        let x = i + direction[0]!;
        let y = j + direction[1]!;
        if (x > -1 && x < m && y > -1 && y < n) live += copy[x]![y]!;
      }
      if (currentValue === 1) {
        if (live < 2 || live > 3) {
          board[i]![j] = 0;
        }
      } else {
        if (live === 3) {
          board[i]![j] = 1;
        }
      }
    }
  }
}
