export function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0]!.length;
  const direction: number[][] = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ];

  const visited: boolean[][] = Array.from(new Array(m)).map(() =>
    new Array(n).fill(false)
  );
  const check = (i: number, j: number, index: number): boolean => {
    if (board[i]![j] !== word[index]) {
      return false;
    } else if (index === word.length - 1) {
      return true;
    }
    visited[i]![j] = true;
    for (const dc of direction) {
      if (
        i + dc[0]! >= 0 &&
        i + dc[0]! < m &&
        j + dc[1]! >= 0 &&
        j + dc[1]! < n &&
        !visited[i + dc[0]!]![j + dc[1]!]
      ) {
        const result = check(i + dc[0]!, j + dc[1]!, index + 1);
        if (result) {
          return true;
        }
      }
    }
    visited[i]![j] = false;
    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (check(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}
