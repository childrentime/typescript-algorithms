export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    return a[0]! - b[0]!;
  });
  const result: number[][] = [intervals[0]!];

  for (let i = 1; i < intervals.length; i++) {
    const right1 = result[result.length - 1]![1]!;
    const left1 = result[result.length - 1]![0]!;
    const left2 = intervals[i]![0]!;
    const right2 = intervals[i]![1]!;
    if (right1 >= left2) {
      result.pop();
      result.push([Math.min(left1, left2), Math.max(right1, right2)]);
    } else {
      result.push(intervals[i]!);
    }
  }

  return result;
}
