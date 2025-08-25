/**
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

 

示例 1：



输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 

 */
export function trap(height: number[]): number {
  const stack = [];
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    while (height[i]! > height[stack[stack.length - 1]!]!) {
      const middle = stack.pop()!;
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1]!;
      const h = Math.min(height[left]!, height[i]!) - height[middle]!
      const w = i - left - 1
      result = result + w * h
    }
    stack.push(i);
  }
  return result;
};