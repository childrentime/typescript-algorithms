export function calculate(s: string): number {
  s = s.trim();
  const stack: number[] = [];
  let preSign = '+';
  let num = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === ' ') {
      continue;
    }
    const number = parseInt(s[i]!);
    if (!isNaN(number)) {
      num = num * 10 + number;
    }
    if (isNaN(number) || i === n - 1) {
      switch (preSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(num * stack.pop()!);
          break;
        default:
          stack.push(~~(stack.pop()! / num));
      }
      preSign = s[i]!;
      num = 0;
    }
  }
  return stack.reduce((pre, cur) => pre + cur, 0);
}
