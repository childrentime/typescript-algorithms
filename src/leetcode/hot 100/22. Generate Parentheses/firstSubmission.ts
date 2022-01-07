function generateParenthesis(n: number): string[] {
  let result = new Set<string>([
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()'
  ]);
  if (n === 1) {
    return ['()'];
  } else if (n === 2) {
    return ['(())', '()()'];
  } else if (n === 3) {
    return [...result];
  }
  for (let i = 4; i <= n; i++) {
    const arr = new Set<string>();
    for (const item of result) {
      for (let k = 0; k < item.length; k++) {
        if (item[k] === '(') {
          arr.add(`${item.slice(0, k)}()${item.slice(k, item.length)}`);
          arr.add(`${item.slice(0, k + 1)}()${item.slice(k + 1, item.length)}`);
        }
      }
    }
    result = arr;
  }

  return [...result];
}
