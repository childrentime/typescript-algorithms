export function rotate(nums: number[], k: number): void {
  while (k--) {
    nums.unshift(nums.pop()!);
  }
}
