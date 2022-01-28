export function merge(intervals: number[][]): number[][] {
  const n = intervals.length;
  let left = 0;
  const answer: number[][] = [];
  intervals.sort((a, b) => a[0]! - b[0]!);
  while (left !== n) {
    if (left === n - 1) {
      answer.push(intervals[left]!);
      break;
    }
    let cur = intervals[left]!;
    let next = intervals[left + 1]!;
    let merge: number[] = [];
    if (cur[1]! >= next[0]!) {
      merge = [cur[0]!, cur[1]! > next[1]! ? cur[1]! : next[1]!];
      left += 2;
      next = intervals[left]!;
      while (left < n && merge[1]! >= next[0]!) {
        merge = [merge[0]!, next[1]! > merge[1]! ? next[1]! : merge[1]!];
        left++;
        next = intervals[left]!;
      }
      answer.push(merge);
    } else {
      answer.push(cur);
      left++;
    }
  }

  return answer;
}
