export function minSubArrayLen(target: number, nums: number[]): number {
  let answer = Infinity;
  const n = nums.length;
  let left = 0;
  let right = 0;
  let sum = 0;
  while (right < n) {
    sum += nums[right]!;
    while (sum >= target) {
      answer = Math.min(answer, right - left + 1);
      sum -= nums[left]!;
      left++;
    }
    right++;
  }
  return answer === Infinity ? 0 : answer;
}
