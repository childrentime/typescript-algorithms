export function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const answer: number[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i]! > temperatures[stack[stack.length - 1]!]!
    ) {
      const top = stack.pop()!;
      answer[top] = i - top;
    }
    stack.push(i);
  }
  while (stack.length) {
    const top = stack.pop()!;
    answer[top] = 0;
  }
  return answer;
}
