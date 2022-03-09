export function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue: number[] = [];
  const answer: number[] = [];
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[i]! > nums[queue[queue.length - 1]!]!) {
      queue.pop();
    }
    queue.push(i);
  }
  answer.push(nums[queue[0]!]!);

  for (let i = k; i < nums.length; i++) {
    if (queue.length === k) {
      queue.shift();
    }
    while (queue.length && nums[i]! > nums[queue[queue.length - 1]!]!) {
      queue.pop();
    }
    while (queue[0]! <= i - k) {
      queue.shift();
    }
    queue.push(i);
    answer.push(nums[queue[0]!]!);
  }

  return answer;
}
