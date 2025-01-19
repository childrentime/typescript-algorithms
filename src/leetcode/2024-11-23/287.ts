export function findDuplicate(nums: number[]): number {
  let slow = nums[0]!;
  let fast = nums[nums[0]!]!;

  while (slow !== fast) {
    slow = nums[slow]!;
    fast = nums[fast]!;
    fast = nums[fast]!;
  }

  fast = 0;
  while (slow !== fast) {
    slow = nums[slow]!;
    fast = nums[fast]!;
  }

  return fast;
}
console.log(findDuplicate([1, 3, 4, 2, 2]));
