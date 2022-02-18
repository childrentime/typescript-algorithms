export function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = [];
  const stack: number[] = [0];
  for (let i = 1; i < temperatures.length; i++) {
    while (temperatures[i]! > temperatures[stack[stack.length - 1]!]!) {
      const index = stack.pop()!;
      result[index] = i - index;
    }
    stack.push(i);
  }
  while (stack.length) {
    const index = stack.pop()!;
    result[index] = 0;
  }
  return result;
}
