export function merge(intervals: number[][]): number[][] {
  const n = intervals.length;
  const answer: number[][] = [];
  intervals.sort((a, b) => a[0]! - b[0]!);
  for (let i = 0; i < n; i++) {
    const l = intervals[i]![0]!;
    const r = intervals[i]![1]!;
    if (answer.length === 0 || answer[answer.length - 1]![1]! < l) {
      answer.push(intervals[i]!);
    } else {
      answer[answer.length - 1]![1] = Math.max(
        answer[answer.length - 1]![1]!,
        r
      );
    }
  }
  return answer;
}
