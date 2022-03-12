export function findDisappearedNumbers(nums: number[]): number[] {
  for (const num of nums) {
    const value = Math.abs(num);
    nums[value - 1] = -Math.abs(nums[value - 1]!);
  }

  let answer: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]! > 0) {
      answer.push(i + 1);
    }
  }

  return answer;
}
