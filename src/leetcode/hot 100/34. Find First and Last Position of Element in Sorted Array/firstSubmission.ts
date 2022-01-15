export function searchRange(nums: number[], target: number): number[] {
  const first = nums.indexOf(target);
  const last = nums.lastIndexOf(target);

  return [first, last];
}
