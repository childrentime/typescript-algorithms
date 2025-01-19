/**
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 */
export function merge(intervals: number[][]): number[][] {
  if (!intervals.length) {
    return [];
  }
  intervals.sort((a, b) => a[0]! - b[0]!);
  const result: number[][] = [];
  result.push(intervals[0]!);
  for (let i = 1; i < intervals.length; i++) {
    const top = result[result.length - 1]!;
    const num = intervals[i]!;
    if (num[0]! <= top[1]!) {
      result.pop();
      result.push([top[0]!, Math.max(top[1]!, num[1]!)]);
    } else {
      result.push(num);
    }
  }
  return result;
}

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]);
