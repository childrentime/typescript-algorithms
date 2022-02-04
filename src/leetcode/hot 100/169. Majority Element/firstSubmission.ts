export function majorityElement(nums: number[]): number {
  let n = nums.length;
  let target = ~~(n / 2) + 1;
  let answer = 0;
  const map = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i]!)) {
      map.set(nums[i]!, map.get(nums[i]!)! + 1);
    } else {
      map.set(nums[i]!, 1);
    }
  }
  for (const key of map.keys()) {
    if (map.get(key)! >= target) {
      answer = key;
    }
  }

  return answer;
}
