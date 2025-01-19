/**

输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
输出：6
解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 */
export function trap(height: number[]): number {
  const stack: number[] = [];
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[stack[stack.length - 1]] < height[i]) {
      const prev = stack.pop();
      if (!stack.length) {
        break;
      }
      const left = stack[stack.length - 1]!;
      result =
        result +
        (i - left - 1) * (Math.min(height[i], height[left]) - height[prev]);
    }

    stack.push(i);
  }

  return result;
}
