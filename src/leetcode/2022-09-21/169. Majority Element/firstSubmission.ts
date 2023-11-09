export default function majorityElement(nums: number[]): number {
  let counter = 1;
  let result = nums[0]!;

  for (let i = 1; i < nums.length; i++) {
    if (counter === 0) {
      result = nums[i]!;
      counter++;
    } else if (result === nums[i]) {
      counter++;
    } else {
      counter--;
    }
  }

  return result;
}
