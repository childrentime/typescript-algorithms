export function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]!)) {
      map.set(nums[i]!, map.get(nums[i]!)! + 1);
    } else {
      map.set(nums[i]!, 1);
    }
  }
  const answer: number[] = [];
  const list = [...map].sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    answer.push(list[i]![0]);
  }
  return answer;
}
