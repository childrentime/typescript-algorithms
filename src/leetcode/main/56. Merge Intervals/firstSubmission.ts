export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0]! - b[0]!);
  const stack: number[][] = [intervals[0]!];
  for (let i = 1; i < intervals.length; i++) {
    if (stack[stack.length - 1]![1]! > intervals[i]![0]!) {
      const max = Math.max(stack[stack.length - 1]![1]!, intervals[i]![1]!);
      stack[stack.length - 1] = [stack[stack.length]![0]!, max];
    } else {
      stack.push(intervals[i]!);
    }
  }
  return stack;
}
