export function rotate(nums: number[], k: number): void {
  k %= nums.length;
  while (k--) {
    nums.unshift(nums.pop()!);
  }
}
