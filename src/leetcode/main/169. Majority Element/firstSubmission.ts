export function majorityElement(nums: number[]): number {
  let count = 1;
  let answer = nums[0]!;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      answer = nums[i]!;
      count++;
    } else if (nums[i] === answer) {
      count++;
    } else {
      count--;
    }
  }
  return answer;
}
