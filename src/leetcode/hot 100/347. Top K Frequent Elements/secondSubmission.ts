const partition = (arr: [number, number][], left: number, right: number) => {
  let l = left;
  let r = right;
  let x = arr[l]!;
  while (l < r) {
    while (l < r && x[1] >= arr[r]![1]) {
      r--;
    }
    arr[l] = arr[r]!;

    while (l < r && x[1] < arr[l]![1]) {
      l++;
    }

    arr[r] = arr[l]!;
  }

  arr[l] = x!;

  return l;
};
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
  // 快速选择出现次数数组中 前k个最多出现的次数
  const list = [...map];
  let left = 0;
  let right = list.length - 1;

  while (left < right) {
    const part = partition(list, left, right);
    if (part < k) {
      left = part + 1;
    } else if (part > k) {
      right = part - 1;
    } else {
      break;
    }
  }
  for (let i = 0; i < k; i++) {
    answer.push(list[i]![0]);
  }
  return answer;
}
