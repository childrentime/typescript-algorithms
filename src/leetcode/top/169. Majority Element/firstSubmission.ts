function majorityElement(nums: number[]): number {
  let count = 0;
  let answer = 0;
  for (const num of nums) {
    if (count === 0) {
      answer = num;
      count++;
    } else if (answer === num) {
      count++;
    } else {
      count--;
    }
  }
  return answer;
}
