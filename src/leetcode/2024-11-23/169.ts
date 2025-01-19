export function majorityElement(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]!;
  }

  let result = nums[0];
  let counter = 1;
  for (let i = 1; i < nums.length; i++) {
    if (counter === 0) {
      result = nums[i];
      counter = 1;
      continue;
    }
    if (nums[i] === result) {
      counter++;
    } else {
      counter--;
    }
  }

  return result as number;
}
