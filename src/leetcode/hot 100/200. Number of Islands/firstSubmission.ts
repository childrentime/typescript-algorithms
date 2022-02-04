export function numIslands(grid: string[][]): number {
  let answer = 0;

  let m = grid.length;
  let n = grid[0]!.length;

  const direction = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1]
  ];

  const mark = (i: number, j: number): void => {
    grid[i]![j] = '2';
    const queue = [[i, j]];
    while (queue.length) {
      const value = queue.shift()!;
      for (const item of direction) {
        const x = value[0]! + item[0]!;
        const y = value[1]! + item[1]!;
        if (
          x >= 0 &&
          y >= 0 &&
          x < m &&
          y < n &&
          grid[x]![y]! !== '0' &&
          grid[x]![y]! !== '2'
        ) {
          queue.push([x, y]);
          grid[x]![y]! = '2';
        }
      }
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i]![j] === '1') {
        mark(i, j);
        answer++;
      }
    }
  }

  return answer;
}
