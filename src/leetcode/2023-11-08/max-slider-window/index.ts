export function maxSlidingWindow(nums: number[], k: number): number[] {
  const result: number[] = [];
  // 单调队列
  const queue: number[] = [];
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i]! > nums[queue[queue.length - 1]!]!) {
      queue.pop();
    }

    queue.push(i);
  }

  result.push(nums[queue[0]!]!);

  for (let i = k; i < nums.length; i++) {
    while (queue.length && nums[i]! > nums[queue[queue.length - 1]!]!) {
      queue.pop();
    }
    queue.push(i);
    while (queue[0]! <= i - k) {
      queue.shift();
    }
    result.push(nums[queue[0]!]!);
  }

  return result;
}
