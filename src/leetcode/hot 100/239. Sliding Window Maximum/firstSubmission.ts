// 使用栈来维护数组中最大值的索引
export function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length;
  const queue: number[] = [];
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i]! >= nums[queue[queue.length - 1]!]!) {
      queue.pop();
    }
    queue.push(i);
  }

  const answer: number[] = [nums[queue[0]!]!];
  for (let i = k; i < n; i++) {
    while (queue.length && nums[i]! >= nums[queue[queue.length - 1]!]!) {
      queue.pop();
    }
    queue.push(i);
    while (queue[0]! <= i - k) {
      queue.shift();
    }
    answer.push(nums[queue[0]!]!);
  }

  return answer;
}
