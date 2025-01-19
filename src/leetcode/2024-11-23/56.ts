/**
以数组 intervals 表示若干个区间的集合，
其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 */
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0]! - b[0]!);
  const result: number[][] = [intervals[0]!];
  for (let i = 1; i < intervals.length; i++) {
    // 什么时候两个区间可以合并？
    const current = result[result.length - 1]!;
    const right = current[1]!;
    const item = intervals[i]!;
    const left = item[0]!;
    if (right >= left) {
      const newRight = Math.max(right, item[1]!);
      result.pop();
      result.push([current[0]!, newRight]);
    } else {
      result.push(item);
    }
  }

  return result;
}
