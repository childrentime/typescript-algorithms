export function findRepeatNumber(nums: number[]): number {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return num;
    }
    set.add(num);
  }
  return 0;
}
