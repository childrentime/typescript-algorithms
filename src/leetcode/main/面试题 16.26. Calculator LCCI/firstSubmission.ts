export function calculate(s: string): number {
  s = s.trim();
  const stack: number[] = [];
  let presign = '+';
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
      switch (presign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop()! * num);
          break;
        case '/':
          stack.push(~~(stack.pop()! / num));
          break;
      }
      presign = s[i]!;
      num = 0;
    }
  }
  let answer = 0;
  for (const num of stack) {
    answer += num;
  }
  return answer;
}
