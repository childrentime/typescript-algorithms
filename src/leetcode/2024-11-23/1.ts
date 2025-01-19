/**
 *
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */
export function twoSum(nums: number[], target: number): number[] {
  const targetMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i] as number;
    if (targetMap.has(num)) {
      return [i, targetMap.get(num) as number];
    } else {
      targetMap.set(target - num, i);
    }
  }
  return [];
}
