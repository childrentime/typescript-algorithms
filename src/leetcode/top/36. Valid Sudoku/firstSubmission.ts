export function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      if (set.has(board[i]![j])) {
        return false;
      }
      if (board[i]![j] !== '.') {
        set.add(board[i]![j]);
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      if (set.has(board[j]![i])) {
        return false;
      }
      if (board[j]![i] !== '.') {
        set.add(board[j]![i]);
      }
    }
  }

  const check = (i: number, j: number): boolean => {
    let p = i;
    let q = j;
    const set = new Set();
    for (; i < p + 3; i++) {
      for (j = q; j < q + 3; j++) {
        if (set.has(board[i]![j])) {
          return false;
        }
        if (board[i]![j] !== '.') {
          set.add(board[i]![j]);
        }
      }
    }

    return true;
  };

  return (
    check(0, 0) &&
    check(0, 3) &&
    check(0, 6) &&
    check(3, 0) &&
    check(3, 3) &&
    check(3, 6) &&
    check(6, 0) &&
    check(6, 3) &&
    check(6, 6)
  );
}
