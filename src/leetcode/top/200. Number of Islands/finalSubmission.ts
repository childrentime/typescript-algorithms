export function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0]!.length;
  const direction: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];

  const id: number[] = [];
  const rank: number[] = [];

  const root = (i: number) => {
    if (id[i] !== i) {
      id[i] = id[id[i]!]!;
      i = id[i]!;
    }
    return i;
  };

  const union = (i: number, j: number): void => {
    const p = root(i);
    const q = root(j);
    if (p === q) {
      return;
    }
    if (rank[p]! > rank[q]!) {
      rank[p] += rank[q]!;
      id[q] = p;
    } else {
      rank[q] += rank[p]!;
      id[p] = q;
    }
  };

  const connected = (i: number, j: number): boolean => {
    return root(i) === root(j);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i]![j]! === '1') {
        id.push(i * n + j);
      } else {
        id.push(-1);
      }
      rank.push(1);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i]![j]! === '1') {
        for (const item of direction) {
          const x = i + item[0]!;
          const y = j + item[1]!;
          if (x >= 0 && x < m && y >= 0 && y < n) {
            if (grid[x]![y]! === '1') {
              if (!connected(i * n + j, x * n + y)) {
                union(i * n + j, x * n + y);
              }
            }
          }
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < id.length; i++) {
    if (id[i] === i) {
      count++;
    }
  }

  return count;
}
