export default function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let result = 0;

  for (const s of set) {
    if (set.has(s - 1)) {
      continue;
    } else {
      let count = 1;
      while (set.has(s + count)) {
        count++;
      }
      result = Math.max(result, count);
    }
  }

  return result;
}
