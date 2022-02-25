export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0]! - b[0]!);
  const answer: number[][] = [];
  for (let i = 0; i < intervals.length; i++) {
    if (!answer.length || answer[answer.length - 1]![1]! < intervals[i]![0]!) {
      answer.push(intervals[i]!);
    } else {
      answer[answer.length - 1]![1] = Math.max(
        answer[answer.length - 1]![1]!,
        intervals[i]![1]!
      );
    }
  }
  return answer;
}
