export function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set<number>();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    set.add(i + 1);
  }
  for (const item of nums) {
    if (set.has(item)) {
      set.delete(item);
    }
  }
  return [...set];
}
