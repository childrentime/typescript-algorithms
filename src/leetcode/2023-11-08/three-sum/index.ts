/**
 *
 * @param nums [-4,-1,-1,0 1 2]
 */
export function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]! > 0) {
      break;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    //以i为基准点
    let point = i + 1;
    let right = nums.length - 1;
    while (point < right) {
      const value = nums[i]! + nums[point]! + nums[right]!;
      // 如果小于0
      if (value < 0) {
        point++;
      } else if (value > 0) {
        right--;
      } else {
        result.push([nums[i]!, nums[point]!, nums[right]!]);
        while (nums[point + 1] === nums[point]) {
          point++;
        }
        while (nums[right - 1] === nums[right]) {
          right--;
        }
        point++;
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-5, -5, -4, -4, -4, -2, -2, -2, 0, 0, 0, 1, 1, 3, 4, 4]));
