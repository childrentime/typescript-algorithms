export function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;
  for (const num of nums) {
    const x = (num - 1) % n;
    nums[x] += n;
  }
  const answer = [];
  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      answer.push(i + 1);
    }
  }
  return answer;
}
