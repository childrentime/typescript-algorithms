export function maximalSquare(matrix: string[][]): number {
  const m = matrix.length;
  const n = matrix[0]!.length;

  const dp: number[][] = Array.from(new Array(m)).map(() =>
    new Array(n).fill(0)
  );

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i]![j]! === '1') {
        if (i === 0 || j === 0) {
          dp[i]![j] = 1;
        } else {
          dp[i]![j] =
            Math.min(
              dp[i - 1]![j]!,
              Math.min(dp[i - 1]![j - 1]!, dp[i]![j - 1]!)
            ) + 1;
        }
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (answer < dp[i]![j]!) {
        answer = dp[i]![j]!;
      }
    }
  }

  return answer * answer;
}
