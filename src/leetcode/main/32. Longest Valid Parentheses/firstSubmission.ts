export function longestValidParentheses(s: string): number {
  let answer = 0;
  const stack: number[] = [];
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop()!;
      if (stack.length === 0) {
        stack.push(i);
      } else {
        answer = Math.max(answer, i - stack[stack.length - 1]!);
      }
    }
  }
  return answer;
}
