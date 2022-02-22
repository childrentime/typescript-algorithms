export function firstMissingPositive(nums: number[]): number {
  const arr = [];
  for (const item of nums) {
    if (item > 0) {
      arr[item] = item;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === undefined) {
      return i;
    }
  }

  return arr.length !== 0 ? arr.length : 1;
}
