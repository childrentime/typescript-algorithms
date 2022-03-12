export function singleNumber(nums: number[]): number {
  let answer = 0;
  for (const num of nums) {
    answer ^= num;
  }
  return answer;
}
