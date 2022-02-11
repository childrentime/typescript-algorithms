export function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;
  const answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = i + 1;
  }
  for (const item of nums) {
    const index = answer.indexOf(item);
    if (index !== -1) {
      answer.splice(index, 1);
    }
  }

  return answer;
}
