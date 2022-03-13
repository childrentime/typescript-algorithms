export function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let max = 0;
  for (const n of set) {
    if (set.has(n - 1)) {
      continue;
    } else {
      let count = 1;
      while (set.has(n + count)) {
        count++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
}
