function uncompress(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ')') {
      stack.push(s[i]);
    } else {
      // 提取当前括号内的子串
      let substring = '';
      while (stack[stack.length - 1] !== '(') {
        substring = stack.pop() + substring;
      }
      // 弹出左括号
      stack.pop();

      // 提取重复次数
      let repeatCount = '';
      while (stack.length > 0 && /\d/.test(stack[stack.length - 1])) {
        repeatCount = stack.pop() + repeatCount;
      }

      // 重复子串并压入栈
      const repeatedSubstring = substring.repeat(parseInt(repeatCount));
      stack.push(...repeatedSubstring.split(''));
    }
  }

  return stack.join('');
}

// 测试用例
console.log(uncompress('3(ab)')); // 输出: 'ababab'
console.log(uncompress('3(ab2(c))')); // 输出: 'abccabccabcc'
