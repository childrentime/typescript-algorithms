function decodeString(s: string): string {
  const stack: string[] = [];
  let ptr = 0;

  const getNumber = (): string => {
    let res = '';
    while (!isNaN(Number(s[ptr]))) {
      res += s[ptr];
      ptr++;
    }
    return res;
  };
  while (ptr < s.length) {
    if (!isNaN(Number(s[ptr]))) {
      const number = getNumber();
      stack.push(number);
    } else if (s[ptr] === ']') {
      ptr++;
      const sub: string[] = [];
      while (stack[stack.length - 1] !== '[') {
        sub.unshift(stack.pop()!);
      }
      stack.pop();
      const timers = Number(stack.pop());
      let str = sub.join('');
      str = str.repeat(timers);
      stack.push(str);
    } else {
      stack.push(s[ptr]!);
      ptr++;
    }
  }
  return stack.join('');
}
