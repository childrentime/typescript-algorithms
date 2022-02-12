export function subarraySum(nums: number[], k: number): number {
  let answer = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end >= 0; end--) {
      sum += nums[end]!;
      if (sum === k) {
        answer++;
      }
    }
  }
  return answer;
}
