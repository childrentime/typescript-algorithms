export function maximalRectangle(matrix: string[][]): number {
  const m = matrix.length;
  if (m === 0) {
    return 0;
  }
  const n = matrix[0]!.length;
  const left: number[][] = Array.from(new Array(m)).map(() =>
    new Array(n).fill(0)
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i]![j]! === '1') {
        left[i]![j] = (j === 0 ? 0 : left[i]![j - 1]!) + 1;
      }
    }
  }

  let answer = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i]![j] === '0') {
        continue;
      }

      let width = left[i]![j]!;
      let area = width;

      for (let k = i - 1; k >= 0; k--) {
        if (left[k]![j] === 0) {
          break;
        } else {
          width = Math.min(width, left[k]![j]!);
          area = Math.max(area, width * (i - k + 1));
        }
      }

      answer = Math.max(answer, area);
    }
  }

  return answer;
}
