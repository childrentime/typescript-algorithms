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

  for (let j = 0; j < n; j++) {
    const up: number[] = [];
    const down: number[] = [];
    let stack: number[] = [];
    for (let i = 0; i < m; i++) {
      while (
        stack.length &&
        left[stack[stack.length - 1]!]![j]! >= left[i]![j]!
      ) {
        stack.pop();
      }
      up[i] = stack.length === 0 ? -1 : stack[stack.length - 1]!;
      stack.push(i);
    }
    stack = [];
    for (let i = m - 1; i >= 0; i--) {
      while (
        stack.length &&
        left[stack[stack.length - 1]!]![j]! >= left[i]![j]!
      ) {
        stack.pop();
      }
      down[i] = stack.length === 0 ? m : stack[stack.length - 1]!;
      stack.push(i);
    }
    for (let i = 0; i < m; i++) {
      answer = Math.max(answer, left[i]![j]! * (down[i]! - up[i]! - 1));
    }
  }

  return answer;
}
