/**

给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]

 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const stack = [];
  const result = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    while (temperatures[i]! > temperatures[stack[stack.length - 1]!]!) {
      const index = stack.pop()!;
      const v = i - index;
      result[index] = v;
    }
    stack.push(i)
  }
  return result;
};