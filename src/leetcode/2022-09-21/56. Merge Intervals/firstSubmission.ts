export default function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0]! - b[0]!;
    } else {
      return a[1]! - b[1]!;
    }
  });

  const stack: number[][] = [intervals[0]!];

  for (let i = 1; i < intervals.length; i++) {
    const top = stack[stack.length - 1]!;
    if (top[1]! >= intervals[i]![0]!) {
      if (top[1]! < intervals[i]![1]!) {
        top[1] = intervals[i]![1]!;
      }
    } else {
      stack.push(intervals[i]!);
    }
  }

  return stack;
}
