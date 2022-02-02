export function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }
  const set = new Set(nums);
  let answer = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentLength = 1;

      while (set.has(num + currentLength)) {
        currentLength++;
      }

      answer = Math.max(answer, currentLength);
    }
  }

  return answer;
}
