/**
 * 
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 */
export function permute(nums: number[]): number[][] {
  if (!nums.length) {
    return [];
  }
  if (nums.length === 1) {
    return [nums];
  }

  const arrays = permute(nums.slice(0, nums.length - 1));
  const number = nums[nums.length - 1]!;
  const result: number[][] = [];
  for (const array of arrays) {
    for (let i = 0; i <= array.length; i++) {
      const copy = [...array];
      copy.splice(i, 0, number)
      result.push(copy)
    }
  }
  return result;
};

console.log(permute([1, 2, 3]))