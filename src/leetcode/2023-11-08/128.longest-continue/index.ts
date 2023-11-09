export function longestConsecutive(nums: number[]): number {
  let max = 0;

  const set = new Set(nums);

  for (const s of set) {
    if (set.has(s - 1)) {
      continue;
    } else {
      let count = 1;
      while (set.has(s + count)) {
        count++;
      }
      max = Math.max(max, count);
    }
  }

  return max;
}
