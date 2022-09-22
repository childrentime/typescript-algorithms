export default function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i]! > temperatures[stack[stack.length - 1]!]!
    ) {
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
