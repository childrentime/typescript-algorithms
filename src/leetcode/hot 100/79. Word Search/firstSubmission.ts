export function exist(board: string[][], word: string): boolean {
  const m = board.length;
  const n = board[0]!.length;
  const direction: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];
  const visited = Array.from(new Array(m)).map(() => new Array(n).fill(false));

  const check = (i: number, j: number, k: number): boolean => {
    if (board[i]![j] !== word[k]) {
      return false;
    } else if (k === word.length - 1) {
      return true;
    }

    visited[i]![j] = true;

    let result = false;

    for (const [dx, dy] of direction) {
      let newi = i + dx!;
      let newj = j + dy!;
      if (newi >= 0 && newi < m && newj >= 0 && newj <= n) {
        if (!visited[newi]![newj]!) {
          const flag = check(newi, newj, k + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }

    visited[i]![j] = false;
    return result;
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
