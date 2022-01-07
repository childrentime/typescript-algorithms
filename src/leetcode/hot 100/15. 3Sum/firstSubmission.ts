export function threeSum(nums: number[]): number[][] {
  const result: string[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i]! + nums[j]! + nums[k]! === 0) {
          result.push(
            [nums[i]!, nums[j]!, nums[k]!].sort((a, b) => a - b).toString()
          );
        }
      }
    }
  }

  return result
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .map(item => {
      return item.split(',').map(Number);
    });
}
