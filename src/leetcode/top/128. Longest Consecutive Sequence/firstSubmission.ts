export function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  let answer = 0;
  const set = new Set(nums);
  for (const s of set) {
    if (!set.has(s - 1)) {
      let count = 1;
      while (set.has(s + count)) {
        count++;
      }
      answer = Math.max(answer, count);
    }
  }
  return answer;
}
