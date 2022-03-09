export function missingNumber(nums: number[]): number {
  const set = new Set<number>(nums);
  const n = set.size;
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  throw new Error('no answer');
}
