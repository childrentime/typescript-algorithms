export function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  const n = nums.length;
  const answer: number[][] = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const v = nums[i]! + nums[left]! + nums[right]!;
      if (v === 0) {
        answer.push([nums[i]!, nums[left]!, nums[right]!]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (v > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return answer;
}
