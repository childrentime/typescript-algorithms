export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    const v = parseInt(token);
    if (!isNaN(v)) {
      stack.push(v);
    } else {
      const v2 = stack.pop()!;
      const v1 = stack.pop()!;
      let v;
      if (token === '*') {
        v = v1 * v2;
      } else if (token === '/') {
        v = ~~(v1 / v2);
      } else if (token === '+') {
        v = v1 + v2;
      } else {
        v = v1 - v2;
      }
      stack.push(v);
    }
  }

  return stack.pop()!;
}
