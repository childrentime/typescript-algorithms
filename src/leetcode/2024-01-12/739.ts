/**
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]!]! < temperatures[i]!
    ) {
      const index = stack.pop()!;
      result[index] = i - index;
    }

    stack.push(i);
  }

  return result;
}
