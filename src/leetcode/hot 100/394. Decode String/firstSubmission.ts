// 3[a2[c]]    a2[c] aaa
function decodeString(s: string): string {
  const stack: string[] = [];
  let ptr: number = 0;

  const getNumber = (): string => {
    let res = '';
    while (!isNaN(Number(s[ptr]))) {
      res = res.concat(s[ptr]!);
      ptr++;
    }
    return res;
  };
  while (ptr < s.length) {
    if (!isNaN(Number(s[ptr]))) {
      const num = getNumber();
      stack.push(num);
    } else if (s[ptr] === ']') {
      ptr++;
      const sub: string[] = [];
      while (stack[stack.length - 1] !== '[') {
        sub.unshift(stack.pop()!);
      }
      stack.pop();
      const times = Number(stack.pop())!;
      let str = sub.join('');
      str = str.repeat(times);
      stack.push(str);
    } else {
      stack.push(s[ptr]!);
      ptr++;
    }
  }
  return stack.join('');
}
