// -4 -1 -1 0 1 2
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]! > 0) {
      return result;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i]! + nums[left]! + nums[right]! === 0) {
        result.push([nums[i]!, nums[left]!, nums[right]!]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (nums[i]! + nums[left]! + nums[right]! > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}
